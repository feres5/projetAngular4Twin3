import { Component, OnInit } from '@angular/core';
import {Facture} from '../../model/facture';
import {FactureServiceService} from '../../services/facture-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-facture',
  templateUrl: './detail-facture.component.html',
  styleUrls: ['./detail-facture.component.scss']
})
export class DetailFactureComponent implements OnInit {
  facture: Facture;

  constructor(private service: FactureServiceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const factureID = this.route.snapshot.params['factureId'];
    this.service.getFactureById(factureID).subscribe(
      (data) => this.facture = data
      // console.log(this.facture)
    );
    console.log('hello');
    console.log(this.facture);
  }

}
