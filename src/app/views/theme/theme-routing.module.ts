import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ColorsComponent} from './colors.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme'
    },
    children: [
      {
        path: '',
        redirectTo: 'colors'
      },
      {
        path: 'colors',
        component: ColorsComponent,
        data: {
          title: 'Colors'
        }
      }
      // {
      //   path: 'products',
      //   component: ListProductComponent,
      //   data: {
      //     title: 'products'
      //   }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {
}
