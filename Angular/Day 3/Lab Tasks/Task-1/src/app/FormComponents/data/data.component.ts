import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [],
})
export class DataComponent {
  @Input() data: { name: string; age: Number }[] = [];
}
