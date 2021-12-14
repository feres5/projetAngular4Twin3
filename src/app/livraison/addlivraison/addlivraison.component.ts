import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Livraison} from '../../model/Livraison';

import {ListLivraisonComponent} from '../list-livraison/list-livraison.component';
import {LivraisonService} from "../../services/livraison.service";


@Component({
  selector: 'app-addlivraison',
  templateUrl: './addlivraison.component.html',
  styleUrls: ['./addlivraison.component.scss']
})
export class AddlivraisonComponent implements OnInit {
  @ViewChild(ListLivraisonComponent) c!: ListLivraisonComponent;

  livraison!: Livraison[];
  livraisonForm = new FormGroup(
    {
      date_livraison: new FormControl('', Validators.required),
      adresse: new FormControl('', Validators.required),
      destinateur: new FormControl('', Validators.required),
      frais_livraison: new FormControl('', Validators.required)
    }
  )

  constructor(private service: LivraisonService, private router: Router) {
  }


  ngOnInit(): void {
    this.service.fetchLivraison().subscribe(
      (t) => {
        this.livraison = t;
      },
      (error) => {
        console.log(error.status)
      }
    );
  }

  get date_livraison() {
    return this.livraisonForm.get('date_livraison');
  }

  get adresse() {
    return this.livraisonForm.get('adresse');
  }

  get destinateur() {
    return this.livraisonForm.get('destinateur');
  }

  get frais_livraison() {
    return this.livraisonForm.get('frais_livraison');
  }


  GetMaxId(t: Livraison[]) {
    let Max = 0;
    let i = 0;
    let n = t.length;

    while (i < n) {
      if (t[i].num_livraison > Max) {
        Max = t[i].num_livraison;
      } else {
        i++;
      }
    }
    console.log("Max : " + Max);
    return Max + Number(1);
  }

  Savelivraison(data: Livraison) {

    data.num_livraison = this.GetMaxId(this.livraison);
    console.log(data.num_livraison);
    this.service.addLivraison(data).subscribe((next) => {
      this.reloadPage();
    }, (error) => {
      console.log(error);
    })

  }

  reloadPage() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }


}
