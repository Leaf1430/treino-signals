import { Component, signal } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-inteface',
  imports: [],
  templateUrl: './inteface.html',
  styleUrl: './inteface.css',
})
export class Inteface {
  protected readonly usuarios = signal<Usuario[]>([
    {
      id: 'Leaf',
      nome: 'Rafael',
      idade: 21
    },
    {
      id: 'Maraia',
      nome: 'Maria',
      idade: 23
    },
    {
      id: 'souzs',
      nome: 'Souza',
      idade: 18
    },
    {
      id: 'fipeipe',
      nome: 'Felipe',
      idade: 13
    },
    {
      id: 'vetoooor',
      nome: 'Vitor',
      idade: 20
    }
  ])
}