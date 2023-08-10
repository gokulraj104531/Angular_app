import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegistration } from '../Models/UserRegistration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegService {

  constructor(private httpclient:HttpClient) {}
    baseurl="https://localhost:7161/";

    GetUser():Observable<UserRegistration[]>{
      return this.httpclient.get<UserRegistration[]>(this.baseurl+"api/User/GetUsers");
    }
   AddUser(user:UserRegistration):Observable<UserRegistration>{
    user.id="0";
    return this.httpclient.post<UserRegistration>(this.baseurl+"api/User/AddUser", user);
   }

   UpdateUser(user:UserRegistration):Observable<UserRegistration>{
    return this.httpclient.put<UserRegistration>(this.baseurl +"api/User/EditUser", user);
   }

   DeleteUser(id:string):Observable<UserRegistration>{
    return this.httpclient.delete<UserRegistration>(this.baseurl+"api/User/DeleteUser/"+id);
   }  
}
