import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {
    public frase: any;
    public mostrar: boolean;
    public personas: string[];
    constructor() {
        this.frase = {
            autor: 'Salomé',
            mensaje: 'Gracias por llegar a nuestras vidas, te amamos mucho hija'
        };
        this.mostrar = false;
        this.personas = ['Juan', 'Yeimy', 'Salomé'];
    }
}
