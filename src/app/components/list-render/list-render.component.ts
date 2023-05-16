import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animalDetails: string = "";  // iniciado como uma string vazia para não mostrar nada na tela caso o botão não seja apertado

  animals: Animal[] = [];   // array de objetos (array de Animal)

  // dessa forma, o angular vai entender que eu estou criando um novo serviço e ele vem do ListService
  constructor(private listService: ListService) {  // para poder trabalhar cm o service nessa classe, eu preciso criar um objeto do service dentro do meu construtor..
    this.getAnimals();    // assim que eu iniciar a minha classe listRender ele vai iniciar esse método getAnimals
  }

  showAge(animal: Animal): void {
    // altera o valor do atributo animalDetails
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano(s)!`;
  }

  removeAnimal(animal: Animal) {    
    this.animals = this.listService.remove(this.animals, animal);      // aqui nessa linha eu estou relacionando, fazendo o link do método do service com o método do componente
  }

  getAnimals(): void {    // o método getAnimals chama o método getAll do service listService
    this.listService.getAll().subscribe((animals) => this.animals = animals);
  }
}
