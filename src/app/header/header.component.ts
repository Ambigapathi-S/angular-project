import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router, private auth: AuthService) { }
  isLoggedIn = this.auth.isLoggedIn;
  goHome() {
    this.router.navigate(['home']);
  }
  Logout() {
    this.auth.Logout();
  }
}
