import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Stock} from '../model/Stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
url = 'http://localhost:8081/SpringMVC/';
  constructor(private http: HttpClient) { }
  getListStock () {
    return this.http.get<Stock[]>(this.url + 'findStocks');
  }
  deleteStock(id: number) {
    return this.http.delete(this.url + 'deleteStock/' + id);
  }
  addStock(stock: Stock) {
  return this.http.post(this.url + 'ajouterStock', stock);
}
  updateClient(stock: Stock) {
    return this.http.put(this.url + 'updateStock', stock);

  }

}
