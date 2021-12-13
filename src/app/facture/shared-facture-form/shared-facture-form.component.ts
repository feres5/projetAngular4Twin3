import { Component, OnInit, Input } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-shared-facture-form',
  templateUrl: './shared-facture-form.component.html',
  styleUrls: ['./shared-facture-form.component.scss']
})
export class SharedFactureFormComponent implements OnInit {
  @Input() parentGroup: FormGroup;
  @Input() header: FormGroup;

  constructor() { }

  ngOnInit(): void {}

}
