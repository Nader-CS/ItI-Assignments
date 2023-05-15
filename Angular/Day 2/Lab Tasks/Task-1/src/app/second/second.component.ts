import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  index = 0;
  imageNames = [
    'assets/images/pexels-any-lane-5945953.jpg',
    'assets/images/pexels-bruno-scramgnon-1337825.jpg',
    'assets/images/pexels-ella-olsson-1640767.jpg',
    'assets/images/pexels-jj-jordan-7585533.jpg',
    'assets/images/pexels-john-finkelstein-1630588.jpg',
    'assets/images/pexels-karolina-grabowska-4038655.jpg',
    'assets/images/pexels-rachel-claire-4819823.jpg',
  ];
  interval: any;
  src = this.imageNames[this.index];
  next() {
    if (this.interval) {
      return;
    }
    this.index++;
    if (this.index > 6) {
      this.index = 0;
    }
    this.src = this.imageNames[this.index];
  }
  prev() {
    if (this.interval) {
      return;
    }

    if (this.index == 0) {
      return;
    } else {
      this.index--;
      this.src = this.imageNames[this.index];
    }
  }
  slide() {
    if (this.interval) {
      return;
    }
    this.interval = setInterval(() => {
      if (this.index == this.imageNames.length - 1) {
        this.index = -1;
      }
      this.index++;
      this.src = this.imageNames[this.index];
    }, 1500);
  }
  stop() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
