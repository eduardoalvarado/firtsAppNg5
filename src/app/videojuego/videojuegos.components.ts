import { Component } from '@angular/core';

@Component({
    selector: 'app-video-juegos',
    templateUrl: './videojuegos.component.html'
})
export class VideojuegosComponent {
    public nombre: string;
    public mejor_juego: string;
    public mejor_juego_retro: string;
    public mostrar_retro: boolean;

    public year: number;

    public videojuegos: Array<any>;
    constructor() {
      this.nombre = 'Videojuegos 2018';
      this.mejor_juego = 'GTA 5';
      this.mejor_juego_retro = 'Super Mario 64';
      this.mostrar_retro = true;
      this.year = 2018;
      this.videojuegos = [
        'Los Simpsons hit and run',
        'Assasins Creed',
        'GTA 5',
        'Call of Duty',
        'Tekken 7',
        12345
      ];
    }
}

