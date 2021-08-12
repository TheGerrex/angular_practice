import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log("Spotify")
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      "Authorization": "Bearer BQATs0fVhWfl1vc_AhjhFX8egbbcVYVctMjocFqHd1Kio5X6HDBsm64ADsgH6hdwwGcm4XiHDHRZqGF63wc"
    });
    return this.http.get("https://api.spotify.com/v1/browse/new-releases", {headers});
  }
}
