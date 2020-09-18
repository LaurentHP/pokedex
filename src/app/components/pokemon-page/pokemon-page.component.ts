import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from 'src/app/services/pokemonApi/pokemon-api.service';
import { PokemonModel } from 'src/app/services/pokemonApi/pokemon-model';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  listaPokemon: PokemonModel[];

  constructor(private pokemonApi:PokemonApiService) { }

  ngOnInit(): void {
    this.pokemonApi.List().subscribe((lista) =>{
      this.listaPokemon = lista;
      console.log(this.listaPokemon);
    }
    )
  }

}
