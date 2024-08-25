import { Args, Query, Resolver } from '@nestjs/graphql';
import { PokemonService } from 'src/providers/pokemon/pokemon.service';
import { pokemon } from 'src/types/pokemon.type';

@Resolver()
export class PokemonResolver {
    constructor(private pokemonService: PokemonService) {}

    @Query(returns => pokemon)
    async pokemon(@Args('name') name: string) {
        const pokemon = await this.pokemonService.getPokemon(name);
        return { name: pokemon};
    };
}
