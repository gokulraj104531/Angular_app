import { Component, OnInit } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';
import { UserRegistration } from './Models/UserRegistration';
import { UserRegService } from './services/user-reg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  Userarray:UserRegistration[]=[];
  constructor(private userservice:UserRegService){}
  ngOnInit(): void {
    
    this.userservice.GetUser().subscribe(response =>{
      console.log(response);
      this.Userarray=response;
    })
  }
  title = 'AngIntro';
}
