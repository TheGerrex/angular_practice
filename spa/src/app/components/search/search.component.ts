import { Component, OnInit, Input } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  searchedHeroes:Heroe[] = [];
  termino:any
  @Input() heroe = {};
  @Input() i: number = 0;


  constructor(private _heroesService:HeroesService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.searchedHeroes = this._heroesService.buscarHeroes(params['termino'])
      console.log(this.searchedHeroes)
    })
  }

  verHeroe(idx:number) {
    this.router.navigate(['/heroe', idx]);
  }

}
