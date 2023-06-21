import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegistration } from '../Models/UserRegistration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegService {

  constructor(private httpclient:HttpClient) {}
    baseurl="https://localhost:44330/api/User/";

    GetUser():Observable<UserRegistration[]>{
      return this.httpclient.get<UserRegistration[]>(this.baseurl+"GetUsers");
    }
   
}
