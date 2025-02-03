import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public nombre: string = 'Spiderman';
  public edad: number = 25;
  public metodo: string = "Hola soy "+this.nombre;

  cambiarNombre() {
    this.nombre = 'Ironman';
  }

  cambiarEdad() {
    this.edad = 35;
  }

  cambiarMetodo(){
    this.metodo = "Hola soy "+this.nombre;
  }

}