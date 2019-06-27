import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup
  public allRegistered:any = [];

  constructor(private fb: FormBuilder, private authService: AuthService,
    private toastrService: ToastrService) {
    this.regForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      address: ['', Validators.required],
      mnumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")]],
      password: ['', [Validators.required, , Validators.minLength(4), Validators.maxLength(8)]],
    });
   }

  ngOnInit() {
  }

  RegistrationSubmit(){
    var previousDetails = JSON.parse(localStorage.getItem('registration')) || [];
    var count = previousDetails.length;

    if(count < 1)
    {
      var id = 1
    }
    else {
      var id = ++count;
    } 
    
    var allregistration = {
      'id' : id,
      'fname' : this.regForm.value.fname,
      'lname' : this.regForm.value.lname,
      'email' : this.regForm.value.email,
      'password' : this.regForm.value.password,
      'mnumber' : this.regForm.value.mnumber,
      'address' : this.regForm.value.address
    }

    previousDetails.push(allregistration);
    localStorage.setItem("registration", JSON.stringify(previousDetails));

    this.allRegistered = this.authService.getRegisterData(); 
    console.log('register data', this.allRegistered);
    if(this.regForm.value == null)
    {
      return false;
    }
    
    this.toastrService.success('Your data Registered Successfully', 'Welcome', {timeOut: 1000});
    this.regForm.reset();
  }

}
