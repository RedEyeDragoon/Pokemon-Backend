import { Query, Resolver } from '@nestjs/graphql';
import { pokemon } from 'src/types/pokemon.type';

@Resolver()
export class PokemonResolver {

    @Query(returns => pokemon)
    pokemon() {
        return {name: 'charmander'};
    };
}
