import { Component, OnInit } from '@angular/core';
import {Client} from '../../model/Client';
import {ClientService} from '../../services/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
  providers: [
    ClientService
  ]
})
export class AddClientComponent implements OnInit {
client: Client;
  constructor(private cls: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.client = new Client();
  }

  save(client: Client) {
    this.cls.addClient(client).subscribe();
    this.router.navigate(['client/listclient'])
  }

}
