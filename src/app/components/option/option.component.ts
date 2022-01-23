import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css'],
})
export class OptionComponent implements OnInit {
  public isSelected: boolean = false;
  @Input() name!: string;
  constructor() {}
  @Output() CheckedChange: EventEmitter<{ name: string; isSelected: boolean }> =
    new EventEmitter<{ name: string; isSelected: boolean }>();
  ngOnInit(): void {}

  onClick(): void {
    this.isSelected = !this.isSelected;
    this.CheckedChange.emit({ name: this.name, isSelected: this.isSelected });
  }
}
