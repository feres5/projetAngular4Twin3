import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {RayonService} from "../../services/rayon.service";

@Component({
  selector: 'app-rayon-edit',
  templateUrl: './rayon-edit.component.html',
  styleUrls: ['./rayon-edit.component.scss']
})
export class RayonEditComponent implements OnInit {
  rayonForm: FormGroup;
  id: number;
  editMode = false;

  // @ViewChild('productForm', { static: false }) productForm: NgForm;

  constructor(private route: ActivatedRoute,
              private rayonService: RayonService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.rayonService.updateRayon(this.rayonForm.value).subscribe(response => {
        // console.log(response);
      }, error => {
        console.log(error);
      });
    } else {
      this.rayonService.PostRayon(this.rayonForm.value).subscribe(response => {
        // console.log(response);
      }, error => {
        console.log(error);
      });
    }
    this.onCancel();
  }

  onCancel() {
    // this.router.navigate(['../'], {relativeTo: this.route});
    this.router.navigate(['/rayons']);
  }

  onClear() {

  }

  private initForm() {
    let rayonId = null;
    let rayonTitle = '';
    let rayonPrice = null;
    let rayonQuantity = null;

    if (this.editMode) {
      const rayon = this.rayonService.getRayon(this.id);
      rayonId = rayon.id;
      rayonTitle = rayon.title;
      rayonPrice = rayon.price;
      rayonQuantity = rayon.quantity;
    }
    this.rayonForm = new FormGroup({
      'id': new FormControl(
        rayonId,
        [Validators.required, Validators.min(0)]
      ),
      'title': new FormControl(rayonTitle, Validators.required),
      'price': new FormControl(
        rayonPrice,
        [Validators.required, Validators.min(1)]
      ),
      'quantity': new FormControl(
        rayonQuantity,
        [Validators.required, Validators.min(0)]
      )
    });
  }
}
