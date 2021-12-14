import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLivraisonComponent } from './list-livraison/list-livraison.component';
import {LivraisonRouting} from './livraison.routing';
import { AddlivraisonComponent } from './addlivraison/addlivraison.component';
import { UpdatelivraisonComponent } from './updatelivraison/updatelivraison.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchfilterPipe } from './searchfilter.pipe';



@NgModule({
  declarations: [
    ListLivraisonComponent,
    AddlivraisonComponent,
    UpdatelivraisonComponent,
    SearchfilterPipe
  ],
  imports: [
    CommonModule,
    LivraisonRouting,
    NgxPaginationModule,
    NgbModule,

    ReactiveFormsModule,FormsModule
  ]
})
export class LivraisonModule { }
