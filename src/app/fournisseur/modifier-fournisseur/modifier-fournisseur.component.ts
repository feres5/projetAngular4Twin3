import { Component, OnInit } from '@angular/core';
import {Produit} from '../../produit/produit';
import {ActivatedRoute, Router} from '@angular/router';
import {ProduitService} from '../../produit/add-produit/produit.service';
import {FournisseurService} from '../fournisseur.service';
import {Fournisseur} from '../fournisseur';

@Component({
  selector: 'app-modifier-fournisseur',
  templateUrl: './modifier-fournisseur.component.html',
  styleUrls: ['./modifier-fournisseur.component.scss']
})
export class ModifierFournisseurComponent implements OnInit {
  newFournisseur: Fournisseur = new Fournisseur();
  constructor(private activatedRoute: ActivatedRoute, private fournisseurService: FournisseurService , private router: Router) { }

  ngOnInit(): void {
    this.fournisseurService.consulterFournisseur(this.activatedRoute.snapshot.params.id).
    subscribe( fourn => {
      console.log(fourn);
      this.newFournisseur = fourn;
    });
  }
  modifierFournisseur() {
    console.log(this.newFournisseur);
    this.fournisseurService.modifierFournisseur(this.newFournisseur)
      .subscribe(fourn => {
        console.log(fourn);
      });
    this.router.navigate(['fournisseur/afficherF']);
  }

}
