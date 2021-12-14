import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boutton',
  templateUrl: './boutton.component.html',
  styleUrls: ['./boutton.component.scss']
})
export class BouttonComponent implements OnInit {
  constructor() { }
@Input() text: String ;
  @Input() couleur: String ;
  @Output() btnclick = new EventEmitter();
  ngOnInit(): void {}
  onClick() {
    this.btnclick.emit();
  }
}
