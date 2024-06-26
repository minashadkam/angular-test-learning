
import {Component} from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent {

    constructor(private auth: AuthService) {
    }

    needsLogin() {
        return !this.auth.isAuthenticated();
    }
}





