import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Task"
  public confirm;

  constructor(private toastrService: ToastrService, private router: Router){}

  clearLocalStorage(){
    this.confirm = confirm("If you click on logot then all data will be deleted. Are You sure about that?")
    if(this.confirm == true)
    {
      localStorage.clear();
      this.router.navigate(['/register']);
      this.toastrService.warning('Data is Deleted', 'Go For registration', {timeOut: 1000});
    }
    else{
      return false;
    }
  }
}
