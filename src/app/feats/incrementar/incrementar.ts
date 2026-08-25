import { Component, signal } from '@angular/core';
import { getCurrentInjector } from '@angular/core/primitives/di';

@Component({
  selector: 'app-incrementar',
  imports: [],
  templateUrl: './incrementar.html',
  styleUrl: './incrementar.css',
})
export class Incrementar {

  valor = signal<number>(0);

  aumentaValor(){
    this.valor.update(current => current +1)
  }

  zeraValor(){
    this.valor.set(0)
  }

}
