import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../services/product.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Product[];
  filteredString = '';
  listProducts: Observable<Product[]>;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {

    // this.subscription = this.productService.productsChanged
    //   .subscribe(
    //     (products: Product[]) => {
    //       this.products = products;
    //     }
    //   );

    this.listProducts = this.productService.getproducts();

  }


  onDelete(index: number) {

    this.productService.deleteProduct(index).subscribe(data => {
      this.ngOnInit();
    });
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
