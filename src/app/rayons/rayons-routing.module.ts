import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListRayonsComponent} from './list-rayon.component';
import {RayonEditComponent} from './rayon-edit/rayon-edit.component';


const routes: Routes = [
  {
    path: '',
    component: ListRayonsComponent,
    data: {
      title: 'All rayons'
    }
  },
  {
    path: 'add',
    component: RayonEditComponent,
    data: {
      title: 'Add rayon'
    }
  },
  {
    path: ':id/edit',
    component: RayonEditComponent,
    data: {
      title: 'Edit rayon'
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RayonsRoutingModule {
}
