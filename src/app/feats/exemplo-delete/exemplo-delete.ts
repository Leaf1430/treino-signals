import { Component, inject, signal } from '@angular/core';
import { ExemploPostService } from '../exemplo-post/exemplo-post-service';
import { InterfacePut } from '../exemplo-put/interface-put';
import { InterfacePost } from '../exemplo-post/interface-post';
import { form, required, FormField } from '@angular/forms/signals';
import { IntefaceDelete } from './inteface-delete';

@Component({
  selector: 'app-exemplo-delete',
  imports: [FormField],
  templateUrl: './exemplo-delete.html',
  styleUrl: './exemplo-delete.css',
})
export class ExemploDelete {
  

  // Injeta o serviço "ExemploPostService" no componente (TypeScript)
  protected readonly exemploPostService = inject(ExemploPostService);

  // Inicia o formulário com as informações contidas aqui. Além disso, é para onde as informações vão depois do cadastro 
  protected putModel = signal<IntefaceDelete>({
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


  protected excluirUsuario(event: SubmitEvent) {
    event.preventDefault();

    // Cria uma constante que recebe os valores do "postModel"
    const post = this.putModel();

    this.exemploPostService.atualizarPostDoService(post).subscribe({

      // Se o post é enviado corretamente, ele segue a sequência do "next"
      next: () => {

        // Alerta acionado quando o Post é cadastrado
        alert ('Post excluído!');

        // Limpa o formulário depois de clicar no botão, fazendo com que os valores fiquem nulos
        this.putModel.set({
          id: null,
          userId: null,
          title: '',
          body: ''
        });
      }
}); 

  }
}

  
