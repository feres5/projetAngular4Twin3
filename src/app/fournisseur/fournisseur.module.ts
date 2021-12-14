import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfficherFournisseurComponent } from './afficher-fournisseur/afficher-fournisseur.component';
import { AjouterFournisseurComponent } from './ajouter-fournisseur/ajouter-fournisseur.component';
import { ModifierFournisseurComponent } from './modifier-fournisseur/modifier-fournisseur.component';
import {FournisseurRouting} from './fournisseur.routing';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AfficherFournisseurComponent,
    AjouterFournisseurComponent,
    ModifierFournisseurComponent
  ],
  imports: [
    CommonModule,
    FournisseurRouting,
    FormsModule,
  ]
})
export class FournisseurModule { }
