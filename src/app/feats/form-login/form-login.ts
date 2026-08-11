import { Component, signal } from '@angular/core';
import { email, form, FormField } from '@angular/forms/signals';
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

  protected loginForm = form(this.loginModel);

  protected estalogado = signal<boolean>(false);

  protected efetuarLogin(event: SubmitEvent) {
    event.preventDefault();

    const login = this.loginModel();

    if(login.email === 'rafavini82@gmail.com' && login.senha === 'senha') {
      this.estalogado.set(true)
    }
  }

}
