import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  user = {
    name: 'Mannie'
  };
  isLoggedIn = true;

  getUser() {
    return this.user;
  }
}
