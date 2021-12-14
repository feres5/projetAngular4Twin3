import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { AjouterproduitComponent } from './ajouterproduit/ajouterproduit.component';
import { ModifierproduitComponent} from './modifierproduit/modifierproduit.component';

const routes: Routes = [
  {
    path: 'new',
    component: AddProduitComponent,
    data: {
      title: 'new product'
    }
  },
  {
    path: 'ajouter',
    component: AjouterproduitComponent,
    data: {
      title: 'ajouter produit'
    }
  },
  {
    path: 'modifier/:id',
    component: ModifierproduitComponent,
    data: {
      title: 'MODIFIER produit'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRouting {}


