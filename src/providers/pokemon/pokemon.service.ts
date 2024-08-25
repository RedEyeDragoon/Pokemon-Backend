import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PokemonService {
    constructor(private http: HttpService) {}

    async getPokemon(name: string) {
        const response$ = this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const reponse = await firstValueFrom(response$);
        const data = reponse.data;
        return data.name;
    }
}
