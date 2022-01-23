import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() optionsArray!: string[];
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

  countItems(str: string): number {
    let count: number = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == ',') count++;
    }
    return count;
  }
}
