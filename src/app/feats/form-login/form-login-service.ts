import { Service, signal } from '@angular/core';
import { Login } from './login';

@Service()
export class FormLoginService {

    autenticarUsuario(credenciais: Login){
        return credenciais.email === 'teste@gmail.com' && credenciais.senha === 'senha'
        }
}
