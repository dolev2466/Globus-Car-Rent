import { Component, OnInit, Input } from '@angular/core';
import { DisplayCar } from 'src/app/models/display-car';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() car!: DisplayCar;
  constructor() {}

  ngOnInit(): void {}
}
