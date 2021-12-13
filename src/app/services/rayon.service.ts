import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Rayon} from '../model/rayon';

@Injectable({
  providedIn: 'root'
})
export class RayonService {
  rayons: Rayon [];
  // productsChanged = new Subject<Product[]>();

  url = 'http://localhost:8090/springMVC/rayons';

  constructor(private http: HttpClient) {
  }

  getRayons() {
    // return this.http.get<Product[]>(this.url).subscribe(products => {
    //     this.products = products;
    //     this.productsChanged.next(products);
    //   }
    // );
    return this.http.get<Rayon[]>(this.url).pipe(tap(rayons => {
      this.rayons = rayons;
    }));
  }

  getRayon(index: number) {
    return this.rayons[index];
  }

  updateRayon(rayon: Rayon) {
    return this.http.put(this.url + '/update/' + rayon.idRayon, rayon);
  }

  PostRayon(rayon: Rayon) {
    return this.http.post(this.url + '/add', rayon);
  }

  deleteRayon(id: number) {

    return this.http.delete(this.url + '/delete/' + id);

  }
}
