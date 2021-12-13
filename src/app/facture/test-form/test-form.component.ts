import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FactureFormService} from '../../services/facture-form.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {
  form1: FormGroup;

  constructor(private fb: FormBuilder,
              private sharedService: FactureFormService) { }

  ngOnInit(): void {
    this.form1 = this.fb.group({
      header: this.sharedService.sharedFactureForm(),
      hobby: [null],
      detailFactures: this.fb.array([
        this.addDetailFactureFormGroup()
      ])
    });
  }
  addDetailFactureClick(): void {
    (<FormArray>this.form1.get('detailFactures')).push(this.addDetailFactureFormGroup());
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

}
