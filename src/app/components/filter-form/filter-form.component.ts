import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css'],
})
export class FilterFormComponent implements OnInit {
  public gearBoxFiler: string = '';
  public yearFiler: string = '';
  public companyFiler: string = '';
  public modelFiler: string = '';
  constructor() {}

  ngOnInit(): void {}

  changeFilter(value: { id: string; filter: string }): void {
    switch (value.id) {
      case 'year':
        this.yearFiler = value.filter.substring(1).split(',').join('||');
        break;
      case 'gear-box':
        this.gearBoxFiler = value.filter.substring(1).split(',').join('||');
        break;
      case 'company':
        this.companyFiler = value.filter.substring(1).split(',').join('||');
        break;
      case 'model':
        this.modelFiler = value.filter.substring(1).split(',').join('||');
        break;
    }
  }
}
