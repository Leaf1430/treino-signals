import { Component, inject, signal } from '@angular/core';
import { ExemploPostService } from '../exemplo-post/exemplo-post-service';
import { InterfacePut } from '../exemplo-put/interface-put';
import { InterfacePost } from '../exemplo-post/interface-post';
import { form, required, FormField } from '@angular/forms/signals';
import { InterfaceDelete } from './interface-delete';

@Component({
  selector: 'app-exemplo-delete',
  imports: [FormField],
  templateUrl: './exemplo-delete.html',
  styleUrl: './exemplo-delete.css',
})
export class ExemploDelete {

  protected readonly exemploPostService = inject(ExemploPostService);

  protected deleteModel = signal<InterfaceDelete>({
    id: null
  });

  protected deletar = signal<InterfaceDelete[]>([]);

  protected deleteForm = form(this.deleteModel, (del) => {

    // ID de usuario
    required(del.id, { message: 'ID é obrigatório' });

  });

  protected deletarPost(event: SubmitEvent) {
    event.preventDefault();

    const excluir = this.deleteModel();

    this.exemploPostService.deletaPostDoService(this.deleteModel()).subscribe({
      next: () => {
        alert('Post deletado!');

        this.deleteModel.set({
          id: null
        });

        this.deleteForm().reset();
      },

      error: () => {
        alert('Algo deu errado no delete!');
      }
    });

    this.deletar.update(valor => [...valor, excluir]);
  };
}

  
