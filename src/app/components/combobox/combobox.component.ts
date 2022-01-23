import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css'],
})
export class ComboboxComponent implements OnInit {
  public checkedItems: string = '';
  public faIcon = faArrowAltCircleDown;
  public isOpen: boolean = false;
  @Output() filerChanged: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onclick(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) this.faIcon = faArrowAltCircleUp;
    else {
      this.faIcon = faArrowAltCircleDown;
    }
  }

  CheckedChange(value: { name: string; isSelected: boolean }) {
    if (value.isSelected) {
      this.checkedItems = this.checkedItems + ',' + value.name;
    } else {
      this.checkedItems = this.checkedItems.replace(',' + value.name, '');
    }
    this.filerChanged.emit(this.checkedItems);
  }
}
