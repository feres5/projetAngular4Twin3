import { Component, OnInit } from '@angular/core';
import {Facture} from '../../model/facture';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: { facture: Facture}) => {
      this.facture = data.facture;
    });
    this.factureForm = this.fb.group({
      montantRemise: [null, Validators.required],
      montanttFacture: [null, Validators.required],
      date: [null, Validators.required],
      active: [null, Validators.required]
    });
  }

}
