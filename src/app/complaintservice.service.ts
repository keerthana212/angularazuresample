import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompliantserviceService {
  private baseUrl = 'http://localhost:8090';

  constructor(private http:HttpClient) { }

  userComplaintService(UserComplaint: object): Observable<object> 
      { console.log ("success");
     return this.http.post(`${this.baseUrl}`+'/track', UserComplaint);
      }
      getHomeList(): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}`+'/display');  //will change
      }
}