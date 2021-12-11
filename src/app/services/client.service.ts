import { Injectable } from '@angular/core';
import {Client} from '../model/Client';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url = 'http://localhost:8081/SpringMVC/';
  constructor(private http: HttpClient) {}

  getListClient () {
    return this.http.get<Client[]>(this.url + 'findClients');
  }

  addClient(client: Client) {
    console.log(client);
    console.log(this.url + 'ajouterClient');
     return this.http.post(this.url + 'ajouterClient', client);
  }
  deleteClient(id: number) {
    return this.http.delete(this.url + 'deleteClient/' + id);
  }


}
