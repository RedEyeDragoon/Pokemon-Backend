import { Args, Query, Resolver } from '@nestjs/graphql';
import { PokemonService } from 'src/providers/pokemon/pokemon.service';
import { Pokemon } from 'src/types/pokemon.type';

@Resolver()
export class PokemonResolver {
    constructor(private pokemonService: PokemonService) {}

    @Query(returns => Pokemon)
    async pokemon(@Args('name') name: string) {
        const pokemon = await this.pokemonService.getPokemon(name);
        return pokemon;
    };

    @Query(returns => [Pokemon])
    async pokemons(@Args('offset', { defaultValue: '0'}) offset?: string) {
        const pokemons = await this.pokemonService.getPokemons(offset);
        return pokemons;
    };
}
