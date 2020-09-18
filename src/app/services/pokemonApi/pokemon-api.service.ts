import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonModel } from './pokemon-model';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private httpClient: HttpClient) { }

  public List (): Observable<PokemonModel[]> {
    return this.httpClient.get<PokemonModel[]>('https://ifpb.github.io/intin-topicos/desafios/pokedex/code/data/pokedex.json');
  }
}
