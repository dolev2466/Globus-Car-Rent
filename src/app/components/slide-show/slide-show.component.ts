import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css'],
})
export class SlideShowComponent implements OnInit {
  private _images: string[] = [
    'assets/slideShow/range-rover-evoque-1.PNG',
    'assets/slideShow/swift.PNG',
    'assets/slideShow/Telsla.PNG',
    'assets/slideShow/Honda.PNG',
    'assets/slideShow/velosster.PNG',
  ];
  private _index: number = 2;
  image1: string = this._images[0];
  image2: string = this._images[1];
  image3: string = this._images[2];
  constructor() {}

  ngOnInit(): void {}

  onNext(): void {
    if (this._index + 1 > this._images.length) this._index = 0;
    this.image3 = this.image2;
    this.image2 = this.image1;
    this.image1 = this._images[this._index++];
  }
  onPrev(): void {
    if (this._index - 2 == 0) this._index = this._images.length;
    this._index--;
    this.image1 = this.image2;
    this.image2 = this.image3;
    this.image3 = this._images[this._index];
  }
}
