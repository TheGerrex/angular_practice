import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  paises: any[] = [];
  constructor(private http: HttpClient) { 
    
  }

  ngOnInit(): void {
  }

}
