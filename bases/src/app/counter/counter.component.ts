import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app.counter',
    template: `
    <p>Bienvenidos a mi primera App</p>
    <h3>Cantidad: {{counter}}</h3>
    <button (click)="incrementarCantidad()">+</button>
    <button (click)="resetCantidad(+1)">reset</button>
    <button (click)="disminuirCantidad()">-</button>
    <h2>Hola Contador</h2>
    
    
    
    
    `
})

export class CounterComponent{
    constructor() { }
}
export class AppComponent {
    public title: string = 'Mi primera app de Angular';
    public counter: number = 1;
  
    /**
     * incrementarCantidad
     */
    public incrementarCantidad():void{
      this.counter=this.counter+1;
    }
    
    /**
     * disminuirCantidad
     */
    public disminuirCantidad():void{
      this.counter=this.counter-1;
    }
    
    public resetCounter():void{
      this.counter=1;
    }
  
    public resetCantidad(resetValues : number){
      this.counter=resetValues;
    }
  
    public actualizarCantidad(value : number):void{
      this.counter += value;
    }
    
  }