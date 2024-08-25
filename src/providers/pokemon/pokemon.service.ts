import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { Pokemon } from 'src/types/pokemon.type';

@Injectable()
export class PokemonService {
    constructor(private http: HttpService) {}

    async getPokemon(name: string): Promise<Pokemon> {
        const response$ = this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const reponse = await firstValueFrom(response$);
        const data = reponse.data;
        return {
            name: data.name,
            image: data.sprites.front_default,
        }
    }

    async getPokemons(offset: string = '0'): Promise<Pokemon[]> {
        const response$ = this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`);
        const response = await firstValueFrom(response$);
        const data = response.data;

       const pokemons = data.results.map(async (pokemon) => {
        return {
            name: pokemon.name,
            image: await this.mapImage(pokemon.url),
        }
       });
       return pokemons;
    };

    async mapImage(url) {
        const response$ = this.http.get(url);
        const response = await firstValueFrom(response$);
        const data = response.data;
        return data.sprites.front_default;
    }
}
