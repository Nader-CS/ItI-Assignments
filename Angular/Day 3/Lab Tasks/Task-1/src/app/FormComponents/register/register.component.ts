import { Component, EventEmitter, Output } from '@angular/core';
import { faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent {
  name = '';
  age = '';
  newStd = {};
  icon = faCheck;
  icon2 = faCircleXmark;
  @Output() myEvent = new EventEmitter();

  addStd() {
    if (+this.age > 20 && +this.age < 40 && this.age && this.name.length >= 3) {
      this.newStd = { name: this.name, age: this.age };
      this.myEvent.emit(this.newStd);
    }
  }
}
