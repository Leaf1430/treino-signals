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
import { CadastroAlunos } from "./feats/cadastro-alunos/cadastro-alunos";
import { ExemploPost } from "./feats/exemplo-post/exemplo-post";
import { ExemploPut } from "./feats/exemplo-put/exemplo-put";
import { ExemploDelete } from "./feats/exemplo-delete/exemplo-delete";
import { ExemploGet } from "./feats/exemplo-get/exemplo-get";
import { UserList } from "./feats/user-list/user-list";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Feats, Inteface, Incrementar, AddImagens, SignalForms, Header, Footer, FormLogin, CadastroAlunos, ExemploPost, ExemploPut, ExemploDelete, ExemploGet, UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('treino-signals');
}
