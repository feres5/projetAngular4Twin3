import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Facture} from '../model/facture';

@Injectable({
  providedIn: 'root'

})
export class FactureServiceService {
  url = 'http://localhost:8090/springMVC/facture';

  constructor(private http: HttpClient) { }

  getListFacture() {
    console.log('retrive service');
    return this.http.get<Facture[]>(this.url + '/retrive-all-factures');
  }
  getFactureById(id: number) {
    return this.http.get<Facture>(this.url + '/retrive-facture/' + id );
  }
  addFacture(facture: Facture) {
    return this.http.post(this.url + '/add-facture', facture);
  }
  updateFacture(id: number, facture: Facture) {
    return this.http.put(this.url + '/update-facture/' + id, facture);
  }
  deleteFacture(id: number) {
    return this.http.delete(this.url + '/remove-facture/' + id);
  }

}
