import {Component, OnInit} from '@angular/core';
import {Produit} from '../../produit/produit';
import {Fournisseur} from '../fournisseur';
import {ProduitService} from '../../produit/add-produit/produit.service';
import {Router} from '@angular/router';
import {FournisseurService} from '../fournisseur.service';

@Component({
  selector: 'app-ajouter-fournisseur',
  templateUrl: './ajouter-fournisseur.component.html',
  styleUrls: ['./ajouter-fournisseur.component.scss']
})
export class AjouterFournisseurComponent implements OnInit {
  newFournisseur: Fournisseur = new Fournisseur();
  message: string;

  constructor(private fournisseurService: FournisseurService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  addFournisseur() {
    console.log(this.newFournisseur);
    this.fournisseurService.ajouterFournisseur(this.newFournisseur)
      .subscribe(fourn => {
        this.reloadPage();
      });
    this.router.navigate(['fournisseur/afficherF']);
  }

  reloadPage() {
    const currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
