import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFactureComponent } from './new-facture/new-facture.component';
import { UpdateFactureComponent } from './update-facture/update-facture.component';
import {FactureRouting} from './facture.routing';
import { ListFactureComponent } from './list-facture/list-facture.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';



@NgModule({
  declarations: [
    NewFactureComponent,
    UpdateFactureComponent,
    ListFactureComponent,
    DetailFactureComponent
  ],
    imports: [
        CommonModule,
        FactureRouting,
        ReactiveFormsModule,
        FormsModule

    ]
})
export class FactureModule { }
