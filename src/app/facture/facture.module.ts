import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFactureComponent } from './new-facture/new-facture.component';
import { UpdateFactureComponent } from './update-facture/update-facture.component';
import {FactureRouting} from './facture.routing';
import { ListFactureComponent } from './list-facture/list-facture.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    NewFactureComponent,
    UpdateFactureComponent,
    ListFactureComponent
  ],
    imports: [
        CommonModule,
        FactureRouting,
        ReactiveFormsModule

    ]
})
export class FactureModule { }
