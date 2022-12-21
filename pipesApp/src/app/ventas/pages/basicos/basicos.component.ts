import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLowerCase = 'gerardo';
  nombreUpperCase = 'GERARDO';
  nombreCompleto = 'Gerardo Garcia';

  fecha: Date = new Date(); // dia de hoy
}
