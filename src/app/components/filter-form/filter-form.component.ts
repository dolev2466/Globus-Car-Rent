import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css'],
})
export class FilterFormComponent implements OnInit {
  @Output() changedFilter: EventEmitter<{ id: string; filter: string }[]> =
    new EventEmitter<{ id: string; filter: string }[]>();
  public gearBoxFiler: string = '';
  public yearFiler: string = '';
  public companyFiler: string = '';
  public modelFiler: string = '';
  public years: string[] = [
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
  ];
  public gears: string[] = ['auto', 'manual'];
  public companies: string[] = [
    'audi',
    'hyundai',
    'kia',
    'ford',
    'jeep',
    'bmw',
    'tesla',
  ];
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
    this.changedFilter.emit([
      { id: 'year', filter: this.yearFiler },
      { id: 'gear-box', filter: this.gearBoxFiler },
      { id: 'company', filter: this.companyFiler },
      { id: 'model', filter: this.modelFiler },
    ]);
  }
}
