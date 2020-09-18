import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPagLayoutComponent } from './components/menu-pag-layout/menu-pag-layout.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';

const routes: Routes = [
  {
    path: '',
    component: MenuPagLayoutComponent,
    children: [
      {
        path: '',
        component: PokemonPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
