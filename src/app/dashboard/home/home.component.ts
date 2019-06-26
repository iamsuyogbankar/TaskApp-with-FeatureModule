import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public getuserdata = [];

constructor() { }

ngOnInit() {
  this.getuserdata = JSON.parse(localStorage.getItem('registration'));
}



}
