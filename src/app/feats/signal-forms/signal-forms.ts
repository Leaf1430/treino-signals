import { Component, signal } from '@angular/core';
import { Produto } from './produto';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-forms',
  imports: [FormField],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.css',
})
export class SignalForms {

  protected produtoModel = signal<Produto>({

    titulo: '',
    descricao: '',
    preco: null
  })
 

  produtoForm = form(this.produtoModel);

  cadastrarProduto(event : SubmitEvent) {
    event.preventDefault();

    const produto = this.produtoModel();

    console.log(produto)

    this.produtoModel.set({
      titulo: '',
      descricao: '',
      preco: null
    })
    
  }

}
