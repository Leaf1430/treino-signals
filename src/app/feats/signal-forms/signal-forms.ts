import { Component, signal } from '@angular/core';
import { Produto } from './produto';
import { form, FormField } from '@angular/forms/signals';
import { Validators } from '@angular/forms';

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

    console.log(produto);

    this.produtos.update(valor => [...valor, produto]);

    this.produtoModel.set({
      titulo: '',
      descricao: '',
      preco: null
    })
    
  }

  protected produtos = signal<Produto[]>([]);

}
