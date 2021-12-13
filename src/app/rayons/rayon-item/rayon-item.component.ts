import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Rayon} from '../../model/rayon';

@Component({
  selector: 'app-rayon-item',
  templateUrl: './rayon-item.component.html',
  styleUrls: ['./rayon-item.component.scss']
})
export class RayonItemComponent implements OnInit {
  @Input() rayon: Rayon;
  @Input() index: number;
  @Output() rayonDelete = new EventEmitter<{ idRayon: number }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDeleteItem(idRayon: number) {
    this.rayonDelete.emit({
      idRayon: idRayon
    });
  }
}
