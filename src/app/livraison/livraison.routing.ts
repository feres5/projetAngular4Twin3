import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListLivraisonComponent} from './list-livraison/list-livraison.component';

const routes: Routes = [
  {
    path: '',
    component: ListLivraisonComponent,
    data: {
      title: 'list des livraisons'
    }
  },
  {
    path: 'new'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivraisonRouting {}
