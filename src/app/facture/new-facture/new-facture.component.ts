import { Component, OnInit } from '@angular/core';
import {FactureServiceService} from '../../services/facture-service.service';
import {Facture} from '../../model/facture';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-facture',
  templateUrl: './new-facture.component.html',
  styleUrls: ['./new-facture.component.scss']
})
export class NewFactureComponent implements OnInit {
  factureForm: FormGroup;
  facture: Facture;

  constructor(private service: FactureServiceService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.factureForm = this.fb.group({
      montantRemise: [null, Validators.required],
      montanttFacture: [null, Validators.required],
      date: [null, Validators.required],
      active: [null, Validators.required]
    });
  }

  addFacture(facture: FormGroup) {
    console.log(facture.value);
    this.service.addFacture(facture.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['facture']);

      },
      error => {
        console.log(error);
      }
    );
  }

}
