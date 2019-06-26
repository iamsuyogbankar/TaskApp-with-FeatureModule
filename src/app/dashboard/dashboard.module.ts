import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from './dashboard.service';

@NgModule({
  declarations: [HomeComponent, UserlistComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
