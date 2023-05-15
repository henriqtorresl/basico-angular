import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  
  name: string = "Henrique";
  age: number = 20;
  job: string = "Programador";
  hobbies: string[] = ["Correr", "Jogar", "Estudar"];
  car = {
    name: "C3",
    year: 2012,
  }

}
