import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFactureComponent } from './new-facture/new-facture.component';
import { UpdateFactureComponent } from './update-facture/update-facture.component';



@NgModule({
  declarations: [
    NewFactureComponent,
    UpdateFactureComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FactureModule { }
