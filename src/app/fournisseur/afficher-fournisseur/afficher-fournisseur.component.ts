import { Component, OnInit } from '@angular/core';
import {Fournisseur} from '../fournisseur';
import {Router} from '@angular/router';
import {FournisseurService} from '../fournisseur.service';
import {Produit} from '../../produit/produit';

@Component({
  selector: 'app-afficher-fournisseur',
  templateUrl: './afficher-fournisseur.component.html',
  styleUrls: ['./afficher-fournisseur.component.scss']
})
export class AfficherFournisseurComponent implements OnInit {
  fournisseurs: Fournisseur[];
  constructor(private fournisseurService: FournisseurService , private router: Router ) {}

  ngOnInit(): void {this.fournisseurService.listeFournisseur().subscribe(fourn => {
    console.log(fourn);
    this.fournisseurs = fourn;
  });
  }
  supprimerFournisseur(f: Fournisseur) {
    this.fournisseurService.supprimerFournisseur(f.idFournisseur).subscribe(() => {
      window.location.reload();
      // this.router.navigate(['produit/new']);
    });
  }
}
