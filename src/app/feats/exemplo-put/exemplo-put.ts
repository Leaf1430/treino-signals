import { Component, inject, signal } from '@angular/core';
import { required, FormField, form } from '@angular/forms/signals';
import { InterfacePut } from './interface-put';
import { ExemploPostService } from '../exemplo-post/exemplo-post-service';
import { InterfacePost } from '../exemplo-post/interface-post';

@Component({
  selector: 'app-exemplo-put',
  imports: [FormField],
  templateUrl: './exemplo-put.html',
  styleUrl: './exemplo-put.css',
})
export class ExemploPut {

  // Injeta o serviço "ExemploPostService" no componente (TypeScript)
  protected readonly exemploPostService = inject(ExemploPostService);

  // Inicia o formulário com as informações contidas aqui. Além disso, é para onde as informações vão depois do cadastro 
  protected putModel = signal<InterfacePut>({
    id: null,
    userId: null,
    title: '',
    body: ''
  });

  // Cria a array "usuários" que pega os objetos da interface "InterfacePost" e cria uma array com os valores digitados pelo usuário no formulário no HTML
  usuarios = signal<InterfacePost[]>([]);

  // Passsa o valor do "postModel" para o "postForm", e cria as requisições do formulário
  protected putForm = form(this.putModel, (user) => {

    // ID de usuario
    required(user.userId, { message: 'ID é obrigatório' });

    // Title
    required(user.title, { message: 'Title é obrigatório' });

    // Body
    required(user.body, { message: 'Body é obrigatório' });

  });

  // Função que é acionada ao clicar o botão "Cadastrar" no HTML
  protected cadastroUsuario(event: SubmitEvent) {
    event.preventDefault();

    // Cria uma constante que recebe os valores do "postModel"
    const post = this.putModel();

    this.exemploPostService.cadastrarPostDoService(post).subscribe({

      // Se o post é enviado corretamente, ele segue a sequência do "next"
      next: () => {

        // Alerta acionado quando o Post é cadastrado
        alert ('Post cadastrado!');

        // Limpa o formulário depois de clicar no botão, fazendo com que os valores fiquem nulos
        this.putModel.set({
          id: null,
          userId: null,
          title: '',
          body: ''
        });

        // Reseta o formulário
        this.putForm().reset();
      },
       
      // Se no envio do post acontece um problema e torna inválido a requisição, ela segue a sequência do "error"
      error: () => {

        // Alerta acionado quando a requisição é inválida
        alert ('Algo deu errado!');
      }
    });

    //Atualiza a lista de usuários mantendo os existentes e adicionando o novo usuário
    this.usuarios.update(valor => [...valor, post]);

  };
}
