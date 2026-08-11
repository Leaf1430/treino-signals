import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Feats } from "./feats/feats";
import { Inteface } from "./feats/inteface/inteface";
import { Incrementar } from "./feats/incrementar/incrementar";
import { AddImagens } from "./feats/add-imagens/add-imagens";
import { SignalForms } from "./feats/signal-forms/signal-forms";
import { Header } from "./feats/header/header";
import { Footer } from "./feats/footer/footer";
import { FormLogin } from "./feats/form-login/form-login";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Feats, Inteface, Incrementar, AddImagens, SignalForms, Header, Footer, FormLogin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('treino-signals');
}
