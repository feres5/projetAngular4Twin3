import { Component, OnInit } from '@angular/core';
import {Stock} from '../../model/Stock';
import {StockService} from '../../services/stock.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss'],
  providers: [
    StockService
  ]
})
export class AddStockComponent implements OnInit {
stock: Stock;
  constructor(private stockservice: StockService, private router: Router) { }

  ngOnInit(): void {
    this.stock = new Stock();
  }
  save(stock: Stock) {
    this.stockservice.addStock(stock).subscribe();
    this.router.navigate(['stock/liststock']);
  }

}
