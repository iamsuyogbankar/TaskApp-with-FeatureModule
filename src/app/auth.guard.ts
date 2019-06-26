import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private commmonService: CommonService, private router: Router){}

  canActivate(): boolean {
    if(this.commmonService.loggedIn()){
      this.router.navigate(['/register']);
      return true;
    } else {
      return false;
    }
  }
   
    
  
  
}
