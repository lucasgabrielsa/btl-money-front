import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="existeErro()">
      <p-messages [(value)]="msgs"></p-messages>
    </div>
  `,
  styles: [`
    .ui-messages-error {
      margin: 0;
      margin-top: 4px;
    }
  `]
})
export class MessageComponent {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  msgs = [];

  existeErro(): boolean {
    const condicao = this.control.hasError(this.error) && this.control.dirty;
    if (condicao) {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: this.text });
    }
    return condicao;
  }

}
