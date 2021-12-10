import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewFactureComponent} from './new-facture/new-facture.component';
import {UpdateFactureComponent} from './update-facture/update-facture.component';
import {ListFactureComponent} from './list-facture/list-facture.component';
import {DetailFactureComponent} from './detail-facture/detail-facture.component';


const routes: Routes = [
  {
    path: '',
    component: ListFactureComponent,
    data: {
      title: 'factures'
    }

  },
  {
    path: 'new',
    component: NewFactureComponent,
    data: {
      title: 'add new facture'
    }
  },
  {
    path: 'update/:factureId',
    component: UpdateFactureComponent,
    data: {
      title: 'update facture'
    }
  },
  {
    path: 'detailfacture/:factureId',
    component: DetailFactureComponent,
    data: {
      title: 'detail facture'
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureRouting {}
