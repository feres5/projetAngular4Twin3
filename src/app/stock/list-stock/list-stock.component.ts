import { Component, OnInit } from '@angular/core';
import {Stock} from '../../model/Stock';
import {StockService} from '../../services/stock.service';

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.scss'],
  providers: [
    StockService
  ]
})
export class ListStockComponent implements OnInit {
stocks: Stock[];
  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.stockService.getListStock().subscribe((data) => this.stocks = data);
  }
  delete(stock: Stock) {
    this.stockService.deleteStock(stock.idStock).subscribe(() => this.stockService.getListStock().subscribe((data) => this.stocks = data ));
  }

}
