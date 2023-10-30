import { Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  isLoggedIn: boolean = false;
  Login(uname:string, pword:string) {
    if (uname == "Raji" && pword == '123456')
    {
      this.isLoggedIn = true;
      return 200;
      
    }
    else {
      this.isLoggedIn = false;
      return 403;
    }
  }

  Logout() {
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }
}
