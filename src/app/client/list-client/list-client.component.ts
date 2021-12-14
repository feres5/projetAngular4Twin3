import { Component, OnInit } from '@angular/core';
import {Client} from '../../model/Client';
import {ClientService} from '../../services/client.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss'],
  providers: [
     ClientService
  ]
})
export class ListClientComponent implements OnInit {
  clientu = new Client();
  show = false;
allClient: Client[];
  constructor (private clientservice: ClientService) { }

  ngOnInit(): void {
    this.clientservice.getListClient().subscribe((data) => this.allClient = data);
  }
delete(client: Client) {
    this.clientservice.deleteClient(client.idClient).subscribe(() => this.clientservice.getListClient().subscribe((data) => this.allClient = data ) );
}

 // affichage de formulaire de update
showUpdate(client: Client) {
    this.show = !this.show;
    this.clientu = client;
}
 // mise a jour client
  update(client: Client) {
    this.clientservice.updateClient(this.clientu).subscribe(() => this.clientservice.getListClient().subscribe((data) => this.allClient = data));
    this.show = false;
  }

}
