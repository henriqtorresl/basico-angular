// um service normalmente faz requisições com a API (com o banco de dados)
// como nn tenho banco de dados, esse service list vai trabalhar com os dados do componente list-render
import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  // boa prática: como esse método faz relação com o método removeAnimal() da classe ListRender, eu coloco nome parecido entre os métodos
  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name);
  }

  add(animals: Animal[], animal: Animal) {
    animals.push(animal);
  }
}
