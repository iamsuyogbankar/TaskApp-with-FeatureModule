import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiBody } from './apibody';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly apiUrl:string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getApiData(): Observable<apiBody[]>{
    return this.http.get<apiBody[]>(this.apiUrl);
  }

  
}
