import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Task-1';
  data: { name: string; age: Number }[] = [];
  GetData(e: any) {
    this.data.push(e);
    console.log(this.data);
  }
}
