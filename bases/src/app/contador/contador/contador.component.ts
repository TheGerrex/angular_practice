import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1>
    <h3>La base es: {{base}}</h3>
    <button (click)="acumular(1)"> +5 </button>
    <span>{{numero}}</span>
    <button (click)="acumular(-1)"> -5 </button>
    `

})
export class ContadorComponent {
    titulo: string = 'Acumulador App';
    numero: number = 10;
    base: number = 5;
  
    acumular(valor: number) {
      this.numero += (this.base*valor);
    }
}