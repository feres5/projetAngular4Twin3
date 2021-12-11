import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientRouting} from './client.routing';
import { AddClientComponent } from './add-client/add-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AddClientComponent,
    ListClientComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    ClientRouting
  ]
})
export class ClientModule { }
