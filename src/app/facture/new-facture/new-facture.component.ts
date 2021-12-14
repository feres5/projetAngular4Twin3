import { Component, OnInit } from '@angular/core';
import {FactureServiceService} from '../../services/facture-service.service';
import {Facture} from '../../model/facture';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FactureFormService} from '../../services/facture-form.service';

@Component({
  selector: 'app-new-facture',
  templateUrl: './new-facture.component.html',
  styleUrls: ['./new-facture.component.scss']
})
export class NewFactureComponent implements OnInit {
  factureForm: FormGroup;

  constructor(private service: FactureServiceService,
              private sharedService: FactureFormService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.factureForm = this.fb.group({
      header: this.sharedService.sharedFactureForm(),
      detailFactures: this.fb.array([
        this.addDetailFactureFormGroup()
      ])
    });
  }

  addDetailFactureClick(): void {
    (<FormArray>this.factureForm.get('detailFactures')).push(this.addDetailFactureFormGroup());
  }

  addDetailFactureFormGroup(): FormGroup {
    return this.fb.group({
      pourcentageRemise: [null, Validators.required],
      qte: [null, Validators.required],
      produit: this.fb.group({
        idProduit: [null, Validators.required]
      })
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

  get detailFactures(): FormArray {
    return this.factureForm.get('detailFactures') as FormArray;
  }
  getValidity(i) {
    return (<FormArray>this.factureForm.get('detailFactures')).controls[i].invalid;
  }

}
