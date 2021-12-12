import {Component, OnInit} from '@angular/core';
import {Facture} from '../../model/facture';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FactureServiceService} from '../../services/facture-service.service';

@Component({
  selector: 'app-update-facture',
  templateUrl: './update-facture.component.html',
  styleUrls: ['./update-facture.component.scss']
})
export class UpdateFactureComponent implements OnInit {
  facture: Facture;
  factureForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: FactureServiceService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: { facture: Facture }) => {
      this.facture = data.facture;
    });
    console.log(this.facture);

    this.factureForm = this.fb.group({
      date: [this.facture.date, Validators.required],
      active: [this.facture.active, Validators.required],
      detailFactures: this.fb.array([
        this.addDetailFactureFormGroup()
      ])
    });
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

  modFacture(factureForm: FormGroup) {
    console.log(factureForm.value);
    this.service.updateFacture(this.facture.idFacture, factureForm.value).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  addDetailFactureClick(): void {
    (<FormArray>this.factureForm.get('detailFactures')).push(this.addDetailFactureFormGroup());
  }
}
