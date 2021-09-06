import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
})
export class Login3Component  {

    constructor(private auth: AuthService) {
    }

    needsLogin() {
        return !this.auth.isAuthenticated();
    }

}
