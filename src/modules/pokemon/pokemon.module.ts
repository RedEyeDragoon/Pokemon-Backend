import { Module } from '@nestjs/common';
import { PokemonService } from 'src/providers/pokemon/pokemon.service';
import { PokemonResolver } from 'src/resolvers/pokemon/pokemon.resolver';

@Module({
    providers: [PokemonService, PokemonResolver]
})
export class PokemonModule {}
