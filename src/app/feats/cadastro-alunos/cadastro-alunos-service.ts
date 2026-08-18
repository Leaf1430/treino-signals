import { Service, signal } from '@angular/core';
import { Cadastro } from './cadastro';

@Service()
export class CadastroAlunosService {

    alunos = signal<Cadastro[]>([]);

    cadastrarAluno(aluno: Cadastro){
        this.alunos.update(valor => [...valor, aluno]);
    }
}
