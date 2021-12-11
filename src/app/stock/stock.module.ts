import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StockRouting} from './stock.routing';
import { ListStockComponent } from './list-stock/list-stock.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddStockComponent } from './add-stock/add-stock.component';



@NgModule({
  declarations: [
    ListStockComponent,
    AddStockComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    StockRouting
  ]
})
export class StockModule { }
