import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {

  animal?: Animal;  // essa interrogação diz que o animal pode vir ou não

  constructor(private listService:ListService, private route: ActivatedRoute) {
    this.getAnimal();   // método que vai ser iniciado qnd o usuário entrar nessa rota
  }

  getAnimal() {
    const id: number = Number(this.route.snapshot.paramMap.get("id"));    // obtendo o id da minha URL e convertendo ele para um number
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }

}
