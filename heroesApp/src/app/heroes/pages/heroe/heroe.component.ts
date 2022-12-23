import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
    .spinner-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }
    
    .mt {
      margin-top: 10px;
    }
    `
  ]
})
export class HeroeComponent {

  heroe!: Heroe;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private heroesService: HeroesService,
    private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroesService.getHeroePorId(id) )
    )
    .subscribe(heroe => this.heroe = heroe)
  }

  regresar() {
    this.router.navigate(['/heroes']);
  }
}
