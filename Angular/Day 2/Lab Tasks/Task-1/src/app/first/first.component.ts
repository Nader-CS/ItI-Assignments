import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  value = '';
  getData(ev: any) {
    this.value = ev.target.value;
  }
  click() {
    this.value = '';
  }
}
