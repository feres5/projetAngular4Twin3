import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {AddClientComponent} from './add-client/add-client.component';

const routes: Routes = [
  {
    path: 'addclient',
    component: AddClientComponent,
    data: {
      title: 'ajouter client'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRouting {}

