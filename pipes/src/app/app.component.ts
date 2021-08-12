import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "Gerardo";
  nombre2: string = "gerARDo GaRCiA gARCia";
  arreglo: number[] = [1,2,3,4,5,6,7,8,9,10];
  pi: number = Math.PI;
  porcentaje: number = 0.65765;
  salario: number = 2565.88;
  fecha: Date = new Date();
  activar: boolean = true;
  idioma: string = "es";
  videoURL: string = "https://www.youtube.com/embed/Y3BgFpVAogw";

  valorPromesa = new Promise<string>((resolve, reject) => {

    setTimeout(() => {
      resolve("Llego la data");

    }, 4500);
  })

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: 20
    }

  }
}
