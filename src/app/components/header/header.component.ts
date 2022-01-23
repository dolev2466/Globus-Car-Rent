import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public links: Link[] = [
    { name: 'LOGIN', link: 'login' },
    { name: 'CARS', link: 'cars' },
    { name: 'MANAGMENT', link: 'managment' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
