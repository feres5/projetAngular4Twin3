import {NgModule} from '@angular/core';
import {
  ListPromotionsComponent
} from './list-promotion.component';
import {FilterPipe} from '../pipes/filter.pipe';
import {SortPipe} from '../pipes/sort.pipe';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PromotionsRoutingModule} from './promotions-routing.module';
import {PromotionEditComponent} from './promotion-edit/promotion-edit.component';
import { PromotionItemComponent } from './promotion-item/promotion-item.component';
import {ApplicationPipesModule} from "../applicationPipesModule";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ApplicationPipesModule,
    PromotionsRoutingModule,
  ],
  declarations: [
    ListPromotionsComponent,
    PromotionEditComponent,
    PromotionItemComponent

  ]
})
export class PromotionsModule {}
