import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {
  // posso inicializar diretamente como um valor vazio ou usar uma ! em frente ao nome da variável
  @Input() name: string = "";     // eu preciso inicialiar o name para que funcione
  @Input() userData!: {email: string, role: string};  // a exclamação "!" diz que a variável userData vai ser inicializada em algum momento, então não sou obrigado a inicializar
}
