import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Livraison} from '../model/Livraison';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  constructor(private http: HttpClient, private router: Router) {
  }

  baseurl = 'http://localhost:8090/springMVC/';

  fetchLivraison(): Observable<Livraison[]> {
    return this.http.get<Livraison[]>(this.baseurl + 'retrieve-all-livraison');
  }

  fetchLivraisonById(id: any): Observable<Livraison> {
    return this.http.get<Livraison>(this.baseurl + 'retrieve-livraison/' + id);
  }

  addLivraison(data: Livraison) {
    return this.http.post(this.baseurl + 'add-livraison/', data);
  }


  deleteLivraison(id: any) {
    console.log(id);
    return this.http.delete(this.baseurl + 'remove-livraison/' + id);

  }

  UpdatLivraison(data: Livraison): Observable<Livraison> {
    return this.http.put<Livraison>(this.baseurl + 'modify-livraison', data);

  }
}
