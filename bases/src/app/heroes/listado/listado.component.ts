import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'Black Panther', 'Thor'];
  heroe_borrado: string = '';

  borrarHeroe() {
    this.heroe_borrado = this.heroes.pop() || '';
  }
}
