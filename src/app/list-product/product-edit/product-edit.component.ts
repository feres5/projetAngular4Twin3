import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  editMode = false;

  // @ViewChild('productForm', { static: false }) productForm: NgForm;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
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
      this.productService.updateProduct(this.productForm.value).subscribe(response => {
        // console.log(response);
      }, error => {
        console.log(error);
      });
    } else {
      this.productService.PostProduct(this.productForm.value).subscribe(response => {
        // console.log(response);
      }, error => {
        console.log(error);
      });
    }
    this.onCancel();
  }

  onCancel() {
    // this.router.navigate(['../'], {relativeTo: this.route});
    this.router.navigate(['/products']);
  }

  onClear() {

  }

  private initForm() {
    let productId = null;
    let productTitle = '';
    let productPrice = null;
    let productQuantity = null;

    if (this.editMode) {
      const product = this.productService.getproduct(this.id);
      productId = product.id;
      productTitle = product.title;
      productPrice = product.price;
      productQuantity = product.quantity;
    }
    this.productForm = new FormGroup({
      'id': new FormControl(
        productId,
        [Validators.required, Validators.min(0)]
      ),
      'title': new FormControl(productTitle, Validators.required),
      'price': new FormControl(
        productPrice,
        [Validators.required, Validators.min(1)]
      ),
      'quantity': new FormControl(
        productQuantity,
        [Validators.required, Validators.min(0)]
      )
    });
  }
}
