import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from './bill';

@Injectable({
  providedIn: 'root'
})
export class ViewbillService {

  private baseUrl = 'http://localhost:8090';
  constructor(private http : HttpClient) { }

  createhomelist(homedata: object): Observable<object> 
  { console.log ("success");
    return this.http.post(`${this.baseUrl}`+'/insert', homedata);
    }

    getbillList(): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}`+'/getdetails');  //will change
    }
  
}