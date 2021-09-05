import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/auth/auth.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
})
export class Login2Component  {

    constructor(private auth: AuthService) {
    }

    needsLogin() {
        return !this.auth.isAuthenticated();
    }
}
