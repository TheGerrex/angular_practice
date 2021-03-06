import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log("Spotify")
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      "Authorization": "Bearer BQCALOERvP1hPIPuPdCoSjayi6We71_78QGJCt3Hub4xRBOH04VNIEefIwqA0KsqRp8v6bAWJBtbUKJ-CKE"
    });
    
    return this.http.get(url, {headers})
  }

  getNewReleases() {
    
    return this.getQuery("browse/new-releases")
      .pipe(map( (data: any) => data.albums.items));
        
  }

  getArtista(termino: string) {
    
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe(map( (data: any) => {
        return data.artists.items;
      }));
    
    // this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers})
    //     .pipe(map( (data: any) => {
    //       return data.artists.items;
    //     }));
  }
}
