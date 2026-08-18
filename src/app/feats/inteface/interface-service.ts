import { Service, signal } from '@angular/core';
import { Usuario } from './usuario';

@Service()
export class InterfaceService {
    usuarios = signal<Usuario[]>([
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
