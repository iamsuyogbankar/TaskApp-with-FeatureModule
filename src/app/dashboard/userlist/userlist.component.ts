import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { DashboardService } from '../dashboard.service';

declare var $:any;
import 'datatables.net'

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
public apiData = [];

  constructor(private dashoardService: DashboardService) { }

  ngOnInit() {
    this.dashoardService.getApiData().subscribe(dt => this.apiData = dt);
    
  }
}
