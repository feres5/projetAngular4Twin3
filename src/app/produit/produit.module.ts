import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProduitComponent } from './add-produit/add-produit.component';
import {ProduitRouting} from './produit.routing';
import { BouttonComponent } from './boutton/boutton.component';
import { AjouterproduitComponent } from './ajouterproduit/ajouterproduit.component';
import {FormsModule} from '@angular/forms';
import { ModifierproduitComponent } from './modifierproduit/modifierproduit.component';



@NgModule({
  declarations: [
    AddProduitComponent,
    BouttonComponent,
    AjouterproduitComponent,
    ModifierproduitComponent
  ],
    imports: [
        CommonModule,
        ProduitRouting,
        FormsModule,

    ]
})
export class ProduitModule { }
