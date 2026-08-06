import { Component, signal } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-inteface',
  imports: [],
  templateUrl: './inteface.html',
  styleUrl: './inteface.css',
})
export class Inteface {
  rafael = signal<Usuario>({
    id: "Leaf1430",
    nome: "Rafael",
    idade: 21
  })

  lucas = signal<Usuario>({
    id: "Luacas12",
    nome: "Rafael",
    idade: 22,
  }) 

  felipe = signal<Usuario>({
    id: "lipeipe",
    nome: "Felipe",
    idade: 19
  })
}