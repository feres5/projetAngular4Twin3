import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailFactureService {
  url = 'http://localhost:8090/springMVC/detail-facture';

  constructor(private http: HttpClient) { }

  getDetailFactures() {
    return this.http.get<any[]>(this.url + '/retrive-all-detail');
  }
}
