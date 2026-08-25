import { Component, Inject, inject, signal } from '@angular/core';
import { Cadastro } from './cadastro';
import { Validators } from '@angular/forms';
import { form, FormField, max, min, required } from '@angular/forms/signals';
import { CadastroAlunosService } from './cadastro-alunos-service';

@Component({
  selector: 'app-cadastro-alunos',
  imports: [FormField],
  templateUrl: './cadastro-alunos.html',
  styleUrl: './cadastro-alunos.css',
})
export class CadastroAlunos {

  cadastroAlunosService = inject(CadastroAlunosService)


  alunoModel = signal<Cadastro> ({
    nome: '',
    media: null
  });

  protected alunoForm = form(this.alunoModel, (s) =>{
     
    required(s.nome, {message: 'O nome do aluno é obrigatório'} );

    required(s.media, {message: 'A média é obrigatória'})

    min(s.media, 0, {message:'Média não pode ser menor do que 0'})

    max(s.media, 10, {message: 'Média não pode ser maior que 10'})

  });

  //protected alunos = signal<Cadastro[]>([]);

  protected cadastrarAluno(event : SubmitEvent) {
    event.preventDefault();

    const cadastro = this.alunoModel();

    this.cadastroAlunosService.cadastrarAluno(cadastro);


    this.alunoModel.set({
      nome: '',
      media: null
    })

    this.alunoForm().reset();

  }
}
