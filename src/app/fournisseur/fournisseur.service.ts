import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Fournisseur} from './fournisseur';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  apiURL: string = 'http://localhost:8090/springMVC/fournisseur/retrieve-all-fournisseur';
  url: string = 'http://localhost:8090/springMVC/fournisseur/add-fournisseur';
  urlsup: string = 'http://localhost:8090/springMVC/fournisseur/retrieve-fournisseur';
  urlmodif: string = 'http://localhost:8090/springMVC/fournisseur/update-fournissseur';
  urlaff: string = 'http://localhost:8090/springMVC/fournisseur/afficher-fournisseur';

  constructor(private http: HttpClient) { }
  listeFournisseur(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(this.apiURL);
  }
  ajouterFournisseur( fourn: Fournisseur): Observable<Fournisseur> {
    return this.http.post<Fournisseur>(this.url, fourn, httpOptions);
  }

  consulterFournisseur( id: number): Observable<Fournisseur> {
    const url = `${this.urlaff}/${id}`;
    console.log(url);
    return this.http.get<Fournisseur>(url, httpOptions);
  }

  modifierFournisseur( fourn: Fournisseur): Observable<Fournisseur> {
    return this.http.post<Fournisseur>(this.urlmodif, fourn, httpOptions);
  }

  supprimerFournisseur(id: number) {
    const url = `${this.urlsup}/${id}`;
    return this.http.get(url, httpOptions);
  }
}
