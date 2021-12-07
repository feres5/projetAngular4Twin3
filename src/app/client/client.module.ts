import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientRouting} from './client.routing';
import { AddClientComponent } from './add-client/add-client.component';



@NgModule({
  declarations: [
    AddClientComponent
  ],
  imports: [
    CommonModule,
    ClientRouting
  ]
})
export class ClientModule { }
