import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {AddClientComponent} from '../client/add-client/add-client.component';
import {ListStockComponent} from './list-stock/list-stock.component';
import {AddStockComponent} from './add-stock/add-stock.component';


const routes: Routes = [
  {
  path: 'liststock',
  component: ListStockComponent,
  data: {
    title: 'Liste des stocks'
  }
},
  {
    path: 'addstock',
    component: AddStockComponent,
    data: {
      title: 'ajouter stock'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRouting {}

