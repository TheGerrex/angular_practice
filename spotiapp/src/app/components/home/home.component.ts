import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  // paises: any[] = [];
  nuevaMusica: any[] = [];
  loading: boolean;


  constructor(private spotify: SpotifyService) { 

    this.loading = true;
    this.spotify.getNewReleases()
      .subscribe((data: any) => {
        this.nuevaMusica = data
        this.loading = false;
      })
  }

}
