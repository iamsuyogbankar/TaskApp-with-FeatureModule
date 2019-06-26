import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getRegisterData(){
    return JSON.parse(localStorage.getItem('registration'));
  }

  getLoginData(){
    return JSON.parse(sessionStorage.getItem('login'));
  }

  loggedIn() {
    return !!localStorage.getItem('registration');
  }
}
