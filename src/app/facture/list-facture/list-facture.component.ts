import { Component, OnInit } from '@angular/core';
import {FactureServiceService} from '../../services/facture-service.service';
import {Facture} from '../../model/facture';

@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.scss']
})
export class ListFactureComponent implements OnInit {
  allFactures: Facture[];
  totalLength: any;
  page: number = 1 ;

  constructor(private service: FactureServiceService) { }

  ngOnInit(): void {
    console.log('retrive ');
    this.service.getListFacture().subscribe(
      (data) => {
        this.allFactures = data;
        this.totalLength = data.length;
      }
    );
  }

  delete(facture: Facture) {
    console.log('deleting');
    const i = this.allFactures.indexOf(facture);
    this.service.deleteFacture(facture.idFacture).subscribe(
      () => this.allFactures.splice(i, 1)
    );
  }

}
