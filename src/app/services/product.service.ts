import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Subject} from 'rxjs';
import {tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product [];
  productsChanged = new Subject<Product[]>();

  url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {
  }

  getproducts() {
    // return this.http.get<Product[]>(this.url).subscribe(products => {
    //     this.products = products;
    //     this.productsChanged.next(products);
    //   }
    // );
    return this.http.get<Product[]>(this.url).pipe(tap(products => {
      this.products = products;
    } ));
  }

  getproduct(index: number) {
    return this.products[index];
  }

  updateProduct(product: Product) {
    return this.http.put(this.url + '/' + product.id, product);
  }

  PostProduct(product: Product) {
    return this.http.post(this.url, product);
  }

  deleteProduct(id: number) {

    return this.http.delete(this.url + '/' + id);

  }


}
