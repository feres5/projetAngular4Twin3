import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Rayon} from '../model/rayon';
import {RayonService} from '../services/rayon.service';

@Component({
  selector: 'app-list-rayon',
  templateUrl: './list-rayon.component.html',
  styleUrls: ['./list-rayon.component.css']
})
export class ListRayonsComponent implements OnInit {

  rayons: Rayon[];
  filteredString = '';
  optionSelected = 'Order By';

  listrayons: Observable<Rayon[]>;

  constructor(private rayonService: RayonService) {
  }

  ngOnInit(): void {

    // this.subscription = this.productService.productsChanged
    //   .subscribe(
    //     (products: Product[]) => {
    //       this.products = products;
    //     }
    //   );

    this.listrayons = this.rayonService.getRayons();

  }


  onDelete(index: number) {

    this.rayonService.deleteRayon(index).subscribe(data => {
      this.ngOnInit();
    });
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }


  onOptionsSelected($event: string) {
    console.log($event);
    console.log(this.optionSelected);
  }
}
