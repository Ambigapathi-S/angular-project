import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';
  errorMsg = '';
  constructor(private auth: AuthService, private router: Router) { }
  Login() {
    if (this.email.trim().length === 0) {
      this.errorMsg = 'Username is Required';
    } else if (this.password.trim().length === 0) {
      this.errorMsg = 'Password is Required';
    } else {
      this.errorMsg = '';
      let res = this.auth.Login(this.email, this.password);
      if (res == 200) {
        this.router.navigate(['home']);
      }
      if (res == 403) {
        this.errorMsg = 'Invalid Credentials';
      }
    }
  }
}
