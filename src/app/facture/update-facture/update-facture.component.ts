import {Component, OnInit, Input} from '@angular/core';
import {Facture} from '../../model/facture';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FactureServiceService} from '../../services/facture-service.service';
import {FactureFormService} from '../../services/facture-form.service';

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
    private service: FactureServiceService,
    private sharedService: FactureFormService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: { facture: Facture }) => {
      this.facture = data.facture;
    });
    console.log(this.facture);

    this.factureForm = this.fb.group({
      header: this.sharedService.sharedFactureForm(),
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
        this.router.navigate(['facture']);
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
