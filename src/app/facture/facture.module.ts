import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewFactureComponent} from './new-facture/new-facture.component';
import {UpdateFactureComponent} from './update-facture/update-facture.component';
import {FactureRouting} from './facture.routing';
import {ListFactureComponent} from './list-facture/list-facture.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DetailFactureComponent} from './detail-facture/detail-facture.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SharedFactureFormComponent } from './shared-facture-form/shared-facture-form.component';
import { TestFormComponent } from './test-form/test-form.component';



@NgModule({
  declarations: [
    NewFactureComponent,
    UpdateFactureComponent,
    ListFactureComponent,
    DetailFactureComponent,
    SharedFactureFormComponent,
    TestFormComponent
  ],
  imports: [
    CommonModule,
    FactureRouting,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule

  ]
})
export class FactureModule {
}
