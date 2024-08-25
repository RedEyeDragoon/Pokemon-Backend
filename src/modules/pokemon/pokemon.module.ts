import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PokemonService } from 'src/providers/pokemon/pokemon.service';
import { PokemonResolver } from 'src/resolvers/pokemon/pokemon.resolver';

@Module({
    imports: [ HttpModule ],
    providers: [PokemonService, PokemonResolver],
})
export class PokemonModule {}
