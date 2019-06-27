import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  public alllogin = [];
  public registerdata = [];

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router, private toasterService: ToastrService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")]],
      password: ['', [Validators.required]]
    });
   }

  ngOnInit() {
    this.registerdata = this.authService.getRegisterData();
    console.log('reg', this.registerdata)
  }

  loginSubmit(){ 
    // login store in session
    var previoussession = JSON.parse(sessionStorage.getItem('login')) || [];
    var count = previoussession.length;
    
    if(count < 1)
      {
        var id:any = 1;
      }else{
          var id:any = ++count
        }
      
      var logincred = {
          'id': id,
          'email': this.loginForm.value.email,
          'password': this.loginForm.value.password
        }               

        // matchig login credentials with register credientials
        var registeredUsers = JSON.parse(localStorage.getItem('registration')) || [];
        for(var i=0; i<registeredUsers.length; i++)
        {
          if(registeredUsers[i].email == this.loginForm.value.email && registeredUsers[i].password == this.loginForm.value.password){
            return this.authenticateUser(registeredUsers[i]);
          }
        }
        this.toasterService.error('Invalid EmailId or Password', 'Sorry', {timeOut: 1000});
  }

  authenticateUser(id){
    console.log(id);
    var logincred = {
      'id': id,
      'email': this.loginForm.value.email,
      'password': this.loginForm.value.password
    }

    sessionStorage.setItem("login", JSON.stringify(logincred));
    this.loginForm.reset();
    this.router.navigate(['/home'])
    this.toasterService.success('Login Successfull','Congratulations', {timeOut: 1000});
  }

}
