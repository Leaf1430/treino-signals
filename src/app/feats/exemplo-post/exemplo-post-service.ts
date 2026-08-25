import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { IntefacePost } from './inteface-post';

@Service()
export class ExemploPostService {
    private readonly httpClient = inject(HttpClient)

    private urlApi = 'https://jsonplaceholder.typicode.com/posts'

    cadastrarPostDoService(postCadastrado: IntefacePost){
        return this.httpClient.post(this.urlApi,postCadastrado)
    }
}
