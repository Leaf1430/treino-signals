import { Component, signal } from '@angular/core';
import { Cadastro } from './cadastro';
import { Validators } from '@angular/forms';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-cadastro-alunos',
  imports: [FormField],
  templateUrl: './cadastro-alunos.html',
  styleUrl: './cadastro-alunos.css',
})
export class CadastroAlunos {


  cadastroModel = signal<Cadastro> ({
    nome: '',
    media: null
  })

  cadastroForm = form(this.cadastroModel);

  cadastrarAluno(event : SubmitEvent) {
    event.preventDefault();

    const cadastro = this.cadastroModel();

    console.log(cadastro);

    this.cadastros.update(valor => (...media, cadastro));

    this.cadastroModel.set({
      nome: '',
      media: null
    })
  }

  protected cadastros = signal<Cadastro[]>([]);
}
