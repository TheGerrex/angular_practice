import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent {

  pais!: Pais;

  constructor(private activatedRoute: ActivatedRoute, private paisService:PaisService) {}

  ngOnInit(): void {
    // this.activatedRoute.params
    // .subscribe(({ id }) => {
    //   console.log(id);

    //   this.paisService.getPaisPorCodigo(id)
    //   .subscribe( pais => {
    //     console.log(pais);
    //   })


    // })

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.getPaisPorCodigo(id)),
      tap(console.log)
    )
    .subscribe( pais => {
      this.pais = pais[0];
    });
  }
}
