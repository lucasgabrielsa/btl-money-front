import { Component, Input } from '@angular/core';

@Component({
  selector: 'lancamentos-tabela',
  templateUrl: './lancamentos-tabela.component.html',
  styleUrls: ['./lancamentos-tabela.component.css']
})
export class LancamentosTabelaComponent {

  @Input() lancamentos: [];

}
