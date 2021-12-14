import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Facture} from '../../model/facture';
import {FactureServiceService} from '../../services/facture-service.service';

@Injectable ({
  providedIn: 'root'
})
export class EditFactureResolver implements Resolve<Facture> {
  constructor(private service: FactureServiceService) {
  }
  resolve(route: ActivatedRouteSnapshot): Observable<Facture> | Facture {
    console.log('edit facture resolver');
    console.log(route.params[':factureId']);
    return this.service.getFactureById(route.params['factureId']);
  }
}
