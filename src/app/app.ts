import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Feats } from "./feats/feats";
import { Inteface } from "./feats/inteface/inteface";
import { Incrementar } from "./feats/incrementar/incrementar";
import { AddImagens } from "./feats/add-imagens/add-imagens";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Feats, Inteface, Incrementar, AddImagens,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('treino-signals');
}
