import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
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
