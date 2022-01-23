import { Component, OnInit } from '@angular/core';
import { DisplayCar } from 'src/app/models/display-car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  public allCars: DisplayCar[] = [
    {
      img: '/assets/slideShow/PIKI.JPG',
      year: 2021,
      company: 'KIA',
      model: 'PIKANTO',
      gearBox: 'Auto',
      bookedDates: [],
      price: 150,
    },
    {
      img: 'assets/slideShow/i30.JPG',
      year: 2022,
      company: 'HYUNDAI',
      model: 'I30',
      gearBox: 'Auto',
      bookedDates: [],
      price: 300,
    },
    {
      img: '/assets/slideShow/PIKI.JPG',
      year: 2021,
      company: 'KIA',
      model: 'PIKANTO',
      gearBox: 'Auto',
      bookedDates: [],
      price: 150,
    },
    {
      img: 'assets/slideShow/i30.JPG',
      year: 2022,
      company: 'HYUNDAI',
      model: 'I30',
      gearBox: 'Manual',
      bookedDates: [],
      price: 300,
    },
    {
      img: '/assets/slideShow/PIKI.JPG',
      year: 2021,
      company: 'KIA',
      model: 'PIKANTO',
      gearBox: 'Auto',
      bookedDates: [],
      price: 150,
    },
    {
      img: 'assets/slideShow/i30.JPG',
      year: 2022,
      company: 'HYUNDAI',
      model: 'I30',
      gearBox: 'Auto',
      bookedDates: [],
      price: 300,
    },
    {
      img: '/assets/slideShow/PIKI.JPG',
      year: 2021,
      company: 'KIA',
      model: 'PIKANTO',
      gearBox: 'Auto',
      bookedDates: [],
      price: 150,
    },
    {
      img: 'assets/slideShow/i30.JPG',
      year: 2022,
      company: 'HYUNDAI',
      model: 'I30',
      gearBox: 'Auto',
      bookedDates: [],
      price: 300,
    },
    {
      img: '/assets/slideShow/PIKI.JPG',
      year: 2021,
      company: 'KIA',
      model: 'PIKANTO',
      gearBox: 'Auto',
      bookedDates: [],
      price: 150,
    },
    {
      img: 'assets/slideShow/i30.JPG',
      year: 2022,
      company: 'HYUNDAI',
      model: 'I30',
      gearBox: 'Auto',
      bookedDates: [],
      price: 300,
    },
    {
      img: '/assets/slideShow/PIKI.JPG',
      year: 2021,
      company: 'KIA',
      model: 'PIKANTO',
      gearBox: 'Auto',
      bookedDates: [],
      price: 150,
    },
    {
      img: 'assets/slideShow/i30.JPG',
      year: 2022,
      company: 'HYUNDAI',
      model: 'I30',
      gearBox: 'Auto',
      bookedDates: [],
      price: 300,
    },
    {
      img: '/assets/slideShow/PIKI.JPG',
      year: 2021,
      company: 'KIA',
      model: 'PIKANTO',
      gearBox: 'Auto',
      bookedDates: [],
      price: 150,
    },
    {
      img: 'assets/slideShow/i30.JPG',
      year: 2022,
      company: 'HYUNDAI',
      model: 'I30',
      gearBox: 'Auto',
      bookedDates: [],
      price: 300,
    },
    {
      img: '/assets/slideShow/PIKI.JPG',
      year: 2021,
      company: 'KIA',
      model: 'PIKANTO',
      gearBox: 'Auto',
      bookedDates: [],
      price: 150,
    },
    {
      img: 'assets/slideShow/i30.JPG',
      year: 2022,
      company: 'HYUNDAI',
      model: 'I30',
      gearBox: 'Auto',
      bookedDates: [],
      price: 300,
    },
  ];
  public cars: DisplayCar[] = [
    {
      img: '/assets/slideShow/PIKI.JPG',
      year: 2021,
      company: 'KIA',
      model: 'PIKANTO',
      gearBox: 'Auto',
      bookedDates: [],
      price: 150,
    },
    {
      img: 'assets/slideShow/i30.JPG',
      year: 2022,
      company: 'HYUNDAI',
      model: 'I30',
      gearBox: 'Auto',
      bookedDates: [],
      price: 300,
    },
    {
      img: '/assets/slideShow/PIKI.JPG',
      year: 2021,
      company: 'KIA',
      model: 'PIKANTO',
      gearBox: 'Auto',
      bookedDates: [],
      price: 150,
    },
    {
      img: 'assets/slideShow/i30.JPG',
      year: 2022,
      company: 'HYUNDAI',
      model: 'I30',
      gearBox: 'Manual',
      bookedDates: [],
      price: 300,
    },
    {
      img: '/assets/slideShow/PIKI.JPG',
      year: 2021,
      company: 'KIA',
      model: 'PIKANTO',
      gearBox: 'Auto',
      bookedDates: [],
      price: 150,
    },
    {
      img: 'assets/slideShow/i30.JPG',
      year: 2022,
      company: 'HYUNDAI',
      model: 'I30',
      gearBox: 'Auto',
      bookedDates: [],
      price: 300,
    },
    {
      img: '/assets/slideShow/PIKI.JPG',
      year: 2021,
      company: 'KIA',
      model: 'PIKANTO',
      gearBox: 'Auto',
      bookedDates: [],
      price: 150,
    },
    {
      img: 'assets/slideShow/i30.JPG',
      year: 2022,
      company: 'HYUNDAI',
      model: 'I30',
      gearBox: 'Auto',
      bookedDates: [],
      price: 300,
    },
    {
      img: '/assets/slideShow/PIKI.JPG',
      year: 2021,
      company: 'KIA',
      model: 'PIKANTO',
      gearBox: 'Auto',
      bookedDates: [],
      price: 150,
    },
    {
      img: 'assets/slideShow/i30.JPG',
      year: 2022,
      company: 'HYUNDAI',
      model: 'I30',
      gearBox: 'Auto',
      bookedDates: [],
      price: 300,
    },
    {
      img: '/assets/slideShow/PIKI.JPG',
      year: 2021,
      company: 'KIA',
      model: 'PIKANTO',
      gearBox: 'Auto',
      bookedDates: [],
      price: 150,
    },
    {
      img: 'assets/slideShow/i30.JPG',
      year: 2022,
      company: 'HYUNDAI',
      model: 'I30',
      gearBox: 'Auto',
      bookedDates: [],
      price: 300,
    },
    {
      img: '/assets/slideShow/PIKI.JPG',
      year: 2021,
      company: 'KIA',
      model: 'PIKANTO',
      gearBox: 'Auto',
      bookedDates: [],
      price: 150,
    },
    {
      img: 'assets/slideShow/i30.JPG',
      year: 2022,
      company: 'HYUNDAI',
      model: 'I30',
      gearBox: 'Auto',
      bookedDates: [],
      price: 300,
    },
    {
      img: '/assets/slideShow/PIKI.JPG',
      year: 2021,
      company: 'KIA',
      model: 'PIKANTO',
      gearBox: 'Auto',
      bookedDates: [],
      price: 150,
    },
    {
      img: 'assets/slideShow/i30.JPG',
      year: 2022,
      company: 'HYUNDAI',
      model: 'I30',
      gearBox: 'Auto',
      bookedDates: [],
      price: 300,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  filterCars(values: { id: string; filter: string }[]): void {
    this.cars = this.allCars;
    values.forEach((value) => {
      switch (value.id) {
        case 'year':
          if (value.filter != '') {
            let values = value.filter.split('||');
            this.cars = this.cars.filter((car) =>
              values.includes(car.year.toString())
            );
          }
          break;
        case 'gear-box':
          if (value.filter != '') {
            let values = value.filter.split('||');
            this.cars = this.cars.filter((car) =>
              values.includes(car.gearBox.toLowerCase())
            );
          }
          break;
        case 'company':
          if (value.filter != '') {
            let values = value.filter.split('||');
            this.cars = this.cars.filter((car) =>
              values.includes(car.company.toLowerCase())
            );
          }
          break;
        case 'model':
          if (value.filter != '') {
            let values = value.filter.split('||');
            this.cars = this.cars.filter((car) =>
              values.includes(car.model.toLowerCase())
            );
          }
          break;
      }
    });
  }
}
