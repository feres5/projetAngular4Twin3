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
  stocku = new Stock();
  showFormUpdate = false;
stocks: Stock[];
  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.stockService.getListStock().subscribe((data) => this.stocks = data);
  }
  delete(stock: Stock) {
    this.stockService.deleteStock(stock.idStock).subscribe(() => this.stockService.getListStock().subscribe((data) => this.stocks = data ));
  }

  showUpdate(stock: Stock) {
    this.showFormUpdate = !this.showFormUpdate;
this.stocku = stock;
  }

  update(stock: Stock) {
    this.stockService.updateClient(stock).subscribe(() => this.stockService.getListStock().subscribe((data) => this.stocks = data ));
    this.showFormUpdate = false;
  }
}
