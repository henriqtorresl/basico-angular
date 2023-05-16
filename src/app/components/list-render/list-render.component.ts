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
    this.animals = this.animals.filter((a) => animal.name !== a.name);   // aqui eu apenas removo o animal visualmente (inativo)
    // exclusão do animal de fato:
    this.listService.remove(animal.id).subscribe();   // relacionando o método remove animal com o método do service remove     
    // sempre que eu interajo com o banco eu tenho que usar o método subscribe que é a maneira do angular dizer que o evento foi executado
  }

  getAnimals(): void {    // o método getAnimals chama o método getAll do service listService
    this.listService.getAll().subscribe((animals) => this.animals = animals);
  }
}
