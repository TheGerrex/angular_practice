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

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  // regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva: string = '';
  paises: Pais[] = [];
  hayError: boolean = false;
  region: string = '';

  constructor(private paisService: PaisService) {}

  getClaseCss(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    this.region = region;
    if (region === this.regionActiva) {return;}
    this.hayError = false;
    this.regionActiva = region;

    this.paisService.buscarRegion(region)
    .subscribe(paises => {
      console.log(paises);
      this.paises = paises;
    }, (err)=> {
      this.hayError = true;
      this.paises = [];
    })
  }
}
