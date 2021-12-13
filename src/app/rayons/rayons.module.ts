import {NgModule} from '@angular/core';
import {ListRayonsComponent} from './list-rayon.component';
import {FilterPipe} from '../pipes/filter.pipe';
import {SortPipe} from '../pipes/sort.pipe';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    ListRayonsComponent,
    ListRayonsComponent,
    FilterPipe,
    SortPipe

  ]
})
export class RayonsModule {}
