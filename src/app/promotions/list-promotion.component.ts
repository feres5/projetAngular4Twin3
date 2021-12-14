import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Promotion} from '../model/promotion';
import {PromotionService} from '../services/promotion.service';

@Component({
  selector: 'app-list-promotion',
  templateUrl: './list-promotion.component.html',
  styleUrls: ['./list-promotion.component.css']
})
export class ListPromotionsComponent implements OnInit {

  promotions: Promotion[];
  filteredString = '';
  optionSelected = 'Order By';

  listpromotions: Observable<Promotion[]>;

  constructor(private promotionService: PromotionService) {
  }

  ngOnInit(): void {

    // this.subscription = this.productService.productsChanged
    //   .subscribe(
    //     (products: Product[]) => {
    //       this.products = products;
    //     }
    //   );

    this.listpromotions = this.promotionService.getPromotions();

  }


  onDelete(event: { idPromotion: number }) {

    this.promotionService.deletePromotion(event.idPromotion).subscribe(data => {
      this.ngOnInit();
    });
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }


  onOptionsSelected($event: string) {
    console.log($event);
    console.log(this.optionSelected);
  }
}
