import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Promotion} from '../../model/promotion';

@Component({
  selector: 'app-promotion-item',
  templateUrl: './promotion-item.component.html',
  styleUrls: ['./promotion-item.component.scss']
})
export class PromotionItemComponent implements OnInit {
  @Input() promotion: Promotion;
  @Input() index: number;
  @Output() promotionDelete = new EventEmitter<{ idPromotion: number }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDeleteItem(idPromotion: number) {
    this.promotionDelete.emit({
      idPromotion: idPromotion
    });
  }
}
