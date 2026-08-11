import { Component, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';
import { Login } from './login';

@Component({
  selector: 'app-form-login',
  imports: [FormField],
  templateUrl: './form-login.html',
  styleUrl: './form-login.css',
})
export class FormLogin {

  protected loginModel = signal<Login>({

    email: '',
    senha: ''
  });

  protected loginForm = form(this.loginModel, (s) => {

    required(s.email, {message: 'O email é obrigatório'});
    email(s.email, {message: 'O email não condiz com um email'});

    required(s.senha, {message: 'A senha é obrigatória'});
    

  });

  protected estalogado = signal<boolean>(false);

  protected efetuarLogin(event: SubmitEvent) {
    event.preventDefault();

    const login = this.loginModel();

    if(login.email === 'teste@gmail.com' && login.senha === 'senha') {
      this.estalogado.set(true)
    }
  }

}
