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
   AddUser(user:UserRegistration):Observable<UserRegistration>{
    user.id="0";
    return this.httpclient.post<UserRegistration>(this.baseurl+"AddUser", user);
   }

   UpdateUser(user:UserRegistration):Observable<UserRegistration>{
    return this.httpclient.put<UserRegistration>(this.baseurl +"EditUser", user);
   }

   DeleteUser(id:string):Observable<UserRegistration>{
    return this.httpclient.delete<UserRegistration>(this.baseurl+"DeleteUser/"+id);
   }
}
