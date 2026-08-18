import { Component, inject, signal } from '@angular/core';
import { Usuario } from './usuario';
import { InterfaceService } from './interface-service';

@Component({
  selector: 'app-inteface',
  imports: [],
  templateUrl: './inteface.html',
  styleUrl: './inteface.css',
})
export class Inteface {
  InterfaceService = inject(InterfaceService)
}