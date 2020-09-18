import { Component, Input } from '@angular/core';
import { PokemonModel } from 'src/app/services/pokemonApi/pokemon-model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() pokemon:PokemonModel;

  get img(){
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.pokemon.id+".png";
  }

  get fixedId() {
    return  ("000"+this.pokemon.id).slice(-3);
  }

  get mainType() {
    return this.pokemon.type[0];
  }
}
