import { Component, Output } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent {

  heroes: Heroe[] = [];

  constructor(private HeroesService: HeroesService) { }

  ngOnInit() {
    this.HeroesService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    })
  }
}
