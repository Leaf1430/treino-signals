import { Component, inject, signal } from '@angular/core';
import { form, required, FormField } from '@angular/forms/signals';
import { ExemploPostService } from './exemplo-post-service';
import { IntefacePost } from './inteface-post';

@Component({
  selector: 'app-exemplo-post',
  imports: [FormField],
  templateUrl: './exemplo-post.html',
  styleUrl: './exemplo-post.css',
})
export class ExemploPost {

  protected readonly exemploPostService = inject(ExemploPostService);


  protected postModel = signal<IntefacePost>({
    userId: null,
    title: '',
    body: ''
  });

  usuarios = signal<IntefacePost[]>([]);

  protected postForm = form(this.postModel, (user) => {

    // ID de usuario
    required(user.userId, { message: 'ID é obrigatório' });

    // Title
    required(user.title, { message: 'Title é obrigatório' });

    // Body
    required(user.body, { message: 'Body é obrigatório' });

  });

  protected cadastroUsuario(event: SubmitEvent) {
    event.preventDefault();

    const post = this.postModel();

    this.exemploPostService.cadastrarPostDoService(post).subscribe({
      next: () => {
        alert('Post cadastrado')
        this.postModel.set({
          userId: null,
          title: '',
          body: ''
        });
        this.postForm().reset();
      },
      error: () => {
        alert('Algo esta errado')
      }
    })

    this.usuarios.update(valor => [...valor, post]);

    
  };

}
