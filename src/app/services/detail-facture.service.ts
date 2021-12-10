import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailFactureService {
  url = 'http://localhost:8081/SpringMVC/detail-facture';

  constructor(private http: HttpClient) { }

  getDetailFactures() {
    return this.http.get<any[]>(this.url + '/retrive-all-detail');
  }
}
