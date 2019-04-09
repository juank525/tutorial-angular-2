import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(nombre: string, isDesencriptado: boolean): any {
    let textoRetorno = '';
    if (isDesencriptado) {
      for (let i = 0 ; i < nombre.length; i++) {
        textoRetorno += '*';
      }
    } else {
      textoRetorno = nombre;
    }
    return textoRetorno;
  }

}
