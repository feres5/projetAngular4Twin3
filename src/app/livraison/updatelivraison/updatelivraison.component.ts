import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Livraison} from '../../model/Livraison';
import {LivraisonService} from '../../services/livraison.service';


@Component({
  selector: 'app-updatelivraison',
  templateUrl: './updatelivraison.component.html',
  styleUrls: ['./updatelivraison.component.scss']
})
export class UpdatelivraisonComponent implements OnInit {


  @Output() notif = new EventEmitter(); // from angular/ core
  constructor(private ac: ActivatedRoute,
              private service: LivraisonService,
              private router: Router) {
  }

  livraison = new Livraison();
  // id=this.ac.snapshot.params.id;

  @Input() id;

  ngOnInit(): void {

    this.getLivraison();
  }


  getLivraison() {
    this.service.fetchLivraisonById(this.id).subscribe(
      (res: Livraison) => {
        this.livraison = res;
        console.log(res.id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  UpdateLivraison(data: Livraison) {

    data.num_livraison = this.id;
    this.service.UpdatLivraison(data).subscribe(() => {
      this.reloadPage();
    }, (error) => {
      console.log(error);
    })
    this.router.navigateByUrl("livraison");
  }

  reloadPage() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

}
