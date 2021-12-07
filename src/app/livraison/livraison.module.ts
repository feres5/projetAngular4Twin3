import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLivraisonComponent } from './list-livraison/list-livraison.component';
import {LivraisonRouting} from './livraison.routing';



@NgModule({
  declarations: [
    ListLivraisonComponent
  ],
  imports: [
    CommonModule,
    LivraisonRouting
  ]
})
export class LivraisonModule { }
