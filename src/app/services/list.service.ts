// um service normalmente faz requisições com a API (com o banco de dados)
// como nn tenho banco de dados, esse service list vai trabalhar com os dados do componente list-render
import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = "http://localhost:3000/animals";

  constructor(private http: HttpClient) { }

  // boa prática: como esse método faz relação com o método removeAnimal() da classe ListRender, eu coloco nome parecido entre os métodos
  remove(id: number) {
    // no delete eu passo no generics < > o que eu quero deletar, e como parâmetro eu passo uma rota
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Animal[]> {    // esse método vai preencher uma lista de Animal
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`); // pegando o id do parâmetro e jogando na minha url
  }
}
