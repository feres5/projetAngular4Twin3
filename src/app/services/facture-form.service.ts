import {Injectable} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FactureFormService {

  constructor(private fb: FormBuilder) {
  }

  sharedFactureForm(): FormGroup {
    const fg = this.fb.group({
      date: [null, Validators.required],
      active: [null, Validators.required]
    });
    return fg;
  }

}
