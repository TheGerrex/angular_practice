import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activado:boolean = true): string {
    return (activado) ? "*".repeat(value.length): value ;
    
    
  }

}
