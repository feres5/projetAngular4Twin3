import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit} from '../produit';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
const httpMultipartOptions = {
  headers: new HttpHeaders( {
    'Content-Type': 'multipart/form-data',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
  } )
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiURL: string = 'http://localhost:8090/springMVC/produit/retrieve-all-produits';
  url: string = 'http://localhost:8090/springMVC/produit/add-produit';
  urlsup: string = 'http://localhost:8090/springMVC/produit/retrieve-produit';
  urlmodif: string = 'http://localhost:8090/springMVC/produit/update-produit';
  urlaff: string = 'http://localhost:8090/springMVC/produit/afficher-produit';
  urlupload: string = 'http://localhost:8090/springMVC/produit/upload';

  constructor(private http: HttpClient) { }
  listeProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiURL);
  }
  ajouterProduit( prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.url, prod, httpOptions);
}

  consulterProduit( id: number): Observable<Produit> {
    const url = `${this.urlaff}/${id}`;
    console.log(url);
    return this.http.get<Produit>(url, httpOptions);
  }

  modifierProduit( prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.urlmodif, prod, httpOptions);
  }

  supprimerProduit(id: number) {
    const url = `${this.urlsup}/${id}`;
    return this.http.get(url, httpOptions);
  }

  uploadFile(fd: FormData) {
    const url = `${this.urlupload}`;
    return this.http.post(url, fd);
  }
}
