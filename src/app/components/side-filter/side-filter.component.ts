import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.css'],
})
export class SideFilterComponent implements OnInit {
  public isOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  OnClick() {
    this.isOpen = !this.isOpen;
  }
}
