import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../add-produit/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../produit';

@Component({
  selector: 'app-modifierproduit',
  templateUrl: './modifierproduit.component.html',
  styleUrls: ['./modifierproduit.component.scss']
})
export class ModifierproduitComponent implements OnInit {
  newProduit: Produit = new Produit();


  constructor(private activatedRoute: ActivatedRoute, private produitService: ProduitService , private router: Router  ) {

  }

  ngOnInit(): void {
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params.id).
    subscribe( prod => {
      console.log(prod);
      this.newProduit = prod;
    });
  }

  modifierProduit() {
    console.log(this.newProduit);
    this.produitService.modifierProduit(this.newProduit)
      .subscribe(prod => {
        console.log(prod);
      });
    this.router.navigate(['produit/new']);
  }

}
