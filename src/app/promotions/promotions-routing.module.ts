import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {
  ListPromotionsComponent
} from './list-promotion.component';
import {PromotionEditComponent} from './promotion-edit/promotion-edit.component';


const routes: Routes = [
  {
    path: '',
    component: ListPromotionsComponent,
    data: {
      title: 'All promotions'
    }
  },
  {
    path: 'add',
    component: PromotionEditComponent,
    data: {
      title: 'Add promotion'
    }
  },
  {
    path: ':id/edit',
    component: PromotionEditComponent,
    data: {
      title: 'Edit promotion'
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionsRoutingModule {
}
