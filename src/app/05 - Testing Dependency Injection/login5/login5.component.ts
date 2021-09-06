import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../04 - Testing Asynchronous Code/login4/login4.component';

@Component({
  selector: 'app-login5',
  templateUrl: './login5.component.html',
})
export class Login5Component implements OnInit {

  needsLogin: boolean = true;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.isAuthenticated().then((authenticated) => {
      this.needsLogin = !authenticated;
    });
  }
}
