import { Component, inject } from '@angular/core';
import { UserListService } from './user-list-service';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  protected readonly userService = inject(UserListService);

  recarregarUsuarios() {
    this.userService.userDetails.reload();
  }
}
