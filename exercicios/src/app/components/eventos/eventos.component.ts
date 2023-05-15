import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {

  show: boolean = false;

  showMessage(): void {
    // toggle (recurso de troca de estado em apenas uma linha)
    this.show = !this.show;   // sempre que eu clicar no botao vai inverter o valor do show
  }

}
