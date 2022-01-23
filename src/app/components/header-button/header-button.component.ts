import { Component, OnInit, Input } from '@angular/core';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.css'],
})
export class HeaderButtonComponent implements OnInit {
  @Input() link!: Link;
  constructor() {}

  ngOnInit(): void {}
}
