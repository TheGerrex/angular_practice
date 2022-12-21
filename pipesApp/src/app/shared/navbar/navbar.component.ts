import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {
  items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            { label: 'Pipes de Angular', 
                icon: 'pi pi-desktop', 
                items: [
                    {   
                        label: 'Textos y Fechas', 
                        icon: 'pi pi-align-left',
                        routerLink: '/',
                    },
                    {   
                        label: 'Números', 
                        icon: 'pi pi-dollar',
                        routerLink: 'numeros',
                    },
                    {   
                        label: 'No comúnes', 
                        icon: 'pi pi-globe',
                        routerLink: 'no-comunes',
                    },
                ]
            },
            { 
                label: 'Pipes personalizados', 
                icon: 'pi pi-cog',
            }
        ];
    }
}
