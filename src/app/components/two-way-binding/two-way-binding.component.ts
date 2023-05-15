import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

  name: string = "";
  age: string = "";
  show1: boolean = false;
  show2: boolean = false;

  showMessage1(): void {
    this.show1 = true;
  }

  showMessage2(): void {
    this.show2 = true;
  }

}
