import { Pipe, PipeTransform } from '@angular/core';
import {Rayon} from '../model/rayon';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Array<Rayon[]>, propName: string): unknown {
    array.sort((a: any, b: any) => {
      if (a[propName] < b[propName]) {
        return -1;
      } else if (a[propName] > b[propName]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
