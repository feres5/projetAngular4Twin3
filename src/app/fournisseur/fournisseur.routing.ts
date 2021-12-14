import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfficherFournisseurComponent} from './afficher-fournisseur/afficher-fournisseur.component';
import {AjouterFournisseurComponent} from './ajouter-fournisseur/ajouter-fournisseur.component';
import {ModifierFournisseurComponent} from './modifier-fournisseur/modifier-fournisseur.component';

const routes: Routes = [
  {
    path: 'afficherF',
    component: AfficherFournisseurComponent,
    data: {
      title: 'FOURNISSEUR'
    }
  },
  {
    path: 'ajouterF',
    component: AjouterFournisseurComponent,
    data: {
      title: 'ajouter FOURNISSEUR'
    }
  },
  {
    path: 'modifierF/:id',
    component: ModifierFournisseurComponent,
    data: {
      title: 'MODIFIER FOURNISSEUR'
    }
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurRouting {}
