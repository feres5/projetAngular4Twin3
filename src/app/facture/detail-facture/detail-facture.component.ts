import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import {Facture} from '../../model/facture';
import {FactureServiceService} from '../../services/facture-service.service';
import {ActivatedRoute} from '@angular/router';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-detail-facture',
  templateUrl: './detail-facture.component.html',
  styleUrls: ['./detail-facture.component.scss']
})
export class DetailFactureComponent implements OnInit {
  @ViewChild('content', {static: false}) el!: ElementRef;

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

  makePdf() {
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save('facture numero ' + this.facture.idFacture + '.pdf');
      }
    });
  }

}
