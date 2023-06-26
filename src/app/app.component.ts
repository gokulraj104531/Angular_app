import { Component, OnInit } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';
import { UserRegistration } from './Models/UserRegistration';
import { UserRegService } from './services/user-reg.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  Userarray:UserRegistration[]=[];
  Userformgroup:FormGroup;


  constructor(private userservice:UserRegService,private fb:FormBuilder){
    this.Userformgroup=this.fb.group({
    id:[""],
    userName:[""],
    name:[""],
    email:[""],
    password:[""],
    createdDate:[""],
    address:[""],
    phoneNumber:[""]
    })
  }
  ngOnInit(): void {
    this.getUsers();
  }

   getUsers(){
    this.userservice.GetUser().subscribe(response =>{
      console.log(response);
      this.Userarray=response;
   })
   }

  onsubmit(){
    console.log(this.Userformgroup.value);
    if(this.Userformgroup.value.id!=null && this.Userformgroup.value.id!=""){
      this.userservice.UpdateUser(this.Userformgroup.value).subscribe(response=>{
        console.log(response);
        this.getUsers();
        this.Userformgroup.setValue({
          id:"",
          userName:"",
          name:"",
          email:"",
          password:"",
          createdDate:"",
          address:"",
          phoneNumber:""
  
        })
      })
    }
    else{
    this.userservice.AddUser(this.Userformgroup.value).subscribe(response=>{
      console.log(response);
      this.getUsers();
      this.Userformgroup.setValue({
        id:"",
        userName:"",
        name:"",
        email:"",
        password:"",
        createdDate:"",
        address:"",
        phoneNumber:""

      })

    });
  }}

Fillform(user:UserRegistration){
  this.Userformgroup.setValue({
    id:user.id,
    userName:user.userName,
    name:user.name,
    email:user.email,
    password:user.password,
    createdDate:user.createdDate,
    address:user.address,
    phoneNumber:user.phoneNumber
  })
}
  DeleteUser(id:string){
    this.userservice.DeleteUser(id).subscribe(response=>{
      console.log(response);
      this.getUsers(); 
    })
  }


  title = 'AngIntro';
}
