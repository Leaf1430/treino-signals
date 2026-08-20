import { Component, inject, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';
import { Login } from './login';
import { FormLoginService } from './form-login-service';

@Component({
  selector: 'app-form-login',
  imports: [FormField],
  templateUrl: './form-login.html',
  styleUrl: './form-login.css',
})
export class FormLogin {

  protected readonly FormLoginService = inject(FormLoginService)
  

  protected loginModel = signal<Login>({

    email: '',
    senha: ''
  });

  protected loginForm = form(this.loginModel, (s) => {

    required(s.email, {message: 'O email é obrigatório'});
    email(s.email, {message: 'O email não condiz com um email'});

    required(s.senha, {message: 'A senha é obrigatória'});
    

  });

   estaLogado = signal<boolean>(false);

   protected efetuarLogin(event: SubmitEvent) {
    event.preventDefault();
    this.estaLogado.set(this.FormLoginService.autenticarUsuario(this.loginModel()));

  // protected efetuarLogin(event: SubmitEvent) {
  //   event.preventDefault();

  //   const login = this.loginModel();

  //   const logou = this.FormLoginService.autenticarUsuario(login);

  //   if(logou === true) {
  //     this.estaLogado.set(true);
  //   }else{
  //     this.estaLogado.set(false)
  //   }

    // if(login.email === 'teste@gmail.com' && login.senha === 'senha') {
    //   this.estaLogado.set(true)
    // }

    this.loginModel.set({
      email: '',
      senha: ''
    }
    );



    this.loginForm().reset();
  }

}
