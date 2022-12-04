import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {
  termino: string = 'Hola Mundo';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) {}

  buscar( termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarRegion(termino)
    .subscribe(paises => {
      this.paises = paises;
    }, (err)=> {
      this.hayError = true;
      this.paises = [];
    })
  }

  sugerencias( termino: string) {
    this.hayError = false;
  }
}
