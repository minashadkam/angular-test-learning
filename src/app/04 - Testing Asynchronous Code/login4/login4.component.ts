import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated()  {
    return Promise.resolve(!!localStorage.getItem('token'));
  }
}



@Component({
  selector: 'app-login4',
  templateUrl: './login4.component.html',
})
export class Login4Component implements OnInit {

    needsLogin: boolean = true;

    constructor(private auth: AuthService) {
    }

    ngOnInit() {
        this.auth.isAuthenticated().then((authenticated) => {
            this.needsLogin = !authenticated;
        })
    }
}

