import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  loggedIn() {
    return !localStorage.getItem('registration');
  }
}
