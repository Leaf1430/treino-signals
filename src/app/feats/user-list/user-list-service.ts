import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceUserList } from './interface-user-list';

@Service()

export class UserListService {

  private readonly httpClient = inject(HttpClient);
  private readonly urlApi = 'https://jsonplaceholder.typicode.com/users';

  readonly userDetails = httpResource<InterfaceUserList[]>(
    () => this.urlApi,
    { defaultValue: [] }
  );
}
