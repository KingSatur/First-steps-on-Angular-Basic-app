// Creando componente


import { Component } from '@angular/core'


@Component({
    /*De esta manera se llamara el componente en el html */
    selector: 'app-header',
    /*Esto es lo que contendra el componente
    Al ser tan simple no hay necesidad de colocarlo en un
    archivo*/
    /*Con template se coloca directamente el codigo html del componente*/
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    
}