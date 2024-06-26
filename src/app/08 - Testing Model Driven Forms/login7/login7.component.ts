import {
  Component,
  EventEmitter, OnInit,
  Output
} from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder, FormControl
} from '@angular/forms';

export class User {
  constructor(public email: string,
              public password: string) {
  }
}

@Component({
  selector: 'app-login7',
  template: `
    <form (ngSubmit)="login()"
          [formGroup]="form">
      <label>Email</label>
      <input type="email"
             formControlName="email">
      <label>Password</label>
      <input type="password"
             formControlName="password">
      <button type="submit">Login</button>
    </form>
  `
})
export class Login7Component implements OnInit {
  @Output() loggedIn = new EventEmitter<User>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    this.form = new FormGroup({
      email: new FormControl(null , [Validators.pattern('[^ @]*@[^ @]*')]),
      password: new FormControl(null , [ Validators.minLength(8)])
    });

    // this.form = this.fb.group({
    //   email: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
    //   password: ['', [Validators.required, Validators.minLength(8)]],
    // });

  }

  login() {
    console.log(`Login ${this.form.value}`);
    if (this.form.valid) {
      this.loggedIn.emit(new User(this.form.value.email, this.form.value.password));
    }
  }
}
