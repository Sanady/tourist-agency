import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  repeatPassword = new FormControl('', [Validators.required]);

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' : '';
  }

  getRepeatPasswordErrorMessage() {
    return this.repeatPassword.hasError('required') ? 'You must enter a value' : '';
  }
}
