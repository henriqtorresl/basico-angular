import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animalDetails: string = "";  // iniciado como uma string vazia para não mostrar nada na tela caso o botão não seja apertado

  animals: Animal[] = [   // array de objetos (array de Animal)
    {name: "Turca", type: "Dog", age: 4},
    {name: "Tom", type: "Cat", age: 10},
    {name: "Frida", type: "Dog", age: 5},
    {name: "Bob", type: "Horse", age: 1},
  ]

  showAge(animal: Animal): void {
    // altera o valor do atributo animalDetails
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano(s)!`;
  }

}
