import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.css'],
})
export class SideFilterComponent implements OnInit {
  @Output() filterChanged: EventEmitter<{ id: string; filter: string }[]> =
    new EventEmitter<{ id: string; filter: string }[]>();
  public isOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  OnClick() {
    this.isOpen = !this.isOpen;
  }
  changeFilter(value: { id: string; filter: string }[]): void {
    this.filterChanged.emit(value);
  }
}
