import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  public publishers = [
    {id: 'DC Comics', value: "DC - Comics"},
    {id: 'Marvel', value: "Marvel - Comics"},
  ]
    
  

}
