import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../services/product.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit, OnDestroy {

  products: Product[];
  subscription: Subscription;
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {

    this.subscription = this.productService.productsChanged
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      );
    this.productService.getproducts();

  }


  onDelete(index: number) {

    this.productService.deleteProduct(index).subscribe(data => {
      this.ngOnInit();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
