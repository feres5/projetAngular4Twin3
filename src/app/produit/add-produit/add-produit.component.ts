import { Component, OnInit } from '@angular/core';
import { ProduitService } from './produit.service';
import { Produit } from '../produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {

  constructor(private produitService: ProduitService , private router: Router) { }
  produits: Produit[];
  name: any;

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
    });
  }

  Search() {
    if (this.name === '') {
      this.ngOnInit();
    } else {
      this.produits = this.produits.filter(res => {
        return res.libelle.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }

  supprimerProduit(p: Produit) {
    const conf = confirm('Etes vous sûr ?');
    if (conf) {
    this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
      window.location.reload();
       this.router.navigate(['produit/new']);
    });
    }
  }

}
