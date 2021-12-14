import {FilterPipe} from './pipes/filter.pipe';
import {SortPipe} from './pipes/sort.pipe';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [
    FilterPipe,
    SortPipe
  ],
  exports: [
    FilterPipe,
    SortPipe
  ]
})
export class ApplicationPipesModule {}
