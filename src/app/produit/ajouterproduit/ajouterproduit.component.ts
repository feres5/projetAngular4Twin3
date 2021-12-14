import {Component, OnInit} from '@angular/core';
import {ProduitService} from '../add-produit/produit.service';
import {Router} from '@angular/router';
import {Produit} from '../produit';

@Component({
  selector: 'app-ajouterproduit',
  templateUrl: './ajouterproduit.component.html',
  styleUrls: ['./ajouterproduit.component.scss']
})
export class AjouterproduitComponent implements OnInit {
  newProduit: Produit = new Produit();
  selectedFile: File = null;
  message: string;
  name: any;

  constructor(private produitService: ProduitService, private router: Router) {

  }

  ngOnInit(): void {
  }

  onSelectedFile(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile.name);
  }

  addProduit() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.produitService.uploadFile(fd)
      .subscribe(prod => {
        this.reloadPage();
        console.log(prod);
      });

    this.newProduit.image = this.selectedFile.name;
    this.produitService.ajouterProduit(this.newProduit)
      .subscribe(prod => {
        console.log(prod);
      });
    this.router.navigate(['produit/new']);
  }

  Search() {
    if (this.name === '') {
      this.ngOnInit();
    }

  }
  reloadPage() {
    const currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
