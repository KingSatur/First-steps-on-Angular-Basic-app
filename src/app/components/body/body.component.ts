import { Component } from '@angular/core'




@Component({
    /*De esta manera se llamara el componente en el html */
    selector: 'app-body',
    /*Esto es lo que contendra el componente
    Al ser tan simple no hay necesidad de colocarlo en un
    archivo*/
    templateUrl: './body.component.html'
})
export class BodyComponent{
    
    frase:any
    mostrar:boolean = true;
    personajes:string[];

    constructor(){
        this.frase = {
            mensaje: "Gran poder",
            autor: "Linterna verde"
        }
        this.personajes = ["Spiderman", "Venom", "Tony Stark"]
    }

}