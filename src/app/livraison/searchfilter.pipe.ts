import { Pipe, PipeTransform } from '@angular/core';
import { Livraison } from '../model/Livraison';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

 
  transform(livraisons:Livraison[],searchvalue:string): Livraison[] {
    if(!livraisons || !searchvalue){
          return livraisons;
    }
    return livraisons.filter(livraison=>
      livraison.date_livraison.toString().toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()) ||
      livraison.num_livraison.toString().toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()) ||
      livraison.frais_livraison.toString().toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()) ||
      livraison.destinateur.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()) ||
      livraison.adresse.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
    );
  } 


}
