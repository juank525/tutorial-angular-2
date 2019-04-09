import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  name = 'Juan Carlos Peña Ruiz';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi = 3.1415926535;
  porcentaje = 0.3456;
  moneda = 35.6;
  video = '28FiwDtsB2A';
  url = "https://www.youtube.com/embed/";
  activar = true;

  heroe = {
    nombre: 'TONY STARK',
    clave : 'IRON MAN',
    edad: 40,
    direccion: {
      numero: 123456
    }
  };

  fecha = new Date();
  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 3500);
  });
}
