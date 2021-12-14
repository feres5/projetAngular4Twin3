import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Promotion} from '../model/promotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  promotions: Promotion[];
  // productsChanged = new Subject<Product[]>();

  url = 'http://localhost:8090/springMVC/promotions';

  constructor(private http: HttpClient) {
  }

  getPromotions() {
    // return this.http.get<Product[]>(this.url).subscribe(products => {
    //     this.products = products;
    //     this.productsChanged.next(products);
    //   }
    // );
    return this.http.get<Promotion[]>(this.url).pipe(tap(promotions => {
      this.promotions = promotions;
    }));
  }

  getPromotion(index: number) {
    return this.promotions[index];
  }

  updatePromotion(promotion: Promotion) {
    return this.http.put(this.url + '/update/' + promotion.idPromotion, promotion);
  }

  PostPromotion(promotion: Promotion) {
    return this.http.post(this.url + '/add', promotion);
  }

  deletePromotion(id: number) {

    return this.http.delete(this.url + '/delete/' + id);

  }
}
