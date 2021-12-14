import {NgModule} from '@angular/core';
import {ListRayonsComponent} from './list-rayon.component';
import {FilterPipe} from '../pipes/filter.pipe';
import {SortPipe} from '../pipes/sort.pipe';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RayonsRoutingModule} from './rayons-routing.module';
import {RayonEditComponent} from './rayon-edit/rayon-edit.component';
import { RayonItemComponent } from './rayon-item/rayon-item.component';
import {ApplicationPipesModule} from "../applicationPipesModule";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ApplicationPipesModule,
    RayonsRoutingModule,
  ],
  declarations: [
    ListRayonsComponent,
    RayonEditComponent,
    RayonItemComponent

  ]
})
export class RayonsModule {}
