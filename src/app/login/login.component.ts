import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { BsModalComponent } from 'ng2-bs3-modal';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { GlobalDataService } from './../global-data.service';
import { FirebaseAuthService } from './../firebase-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email='';
  password='';
  emailforgot='';
  current='false';
  @ViewChild('myModal')
  modal: BsModalComponent;


  constructor(public auth: FirebaseAuthService ,public router:Router, public af: AngularFireDatabase, public global:GlobalDataService   ) { 
    if(this.auth.getUser() != false){
     this.router.navigate(['/dashboard']);
   }
     
}

login() {
      
  this.auth.loginUser(this.email,this.password).then(data =>{
 if(data == true){
 
 if(this.email.includes("admin")){
   localStorage.setItem("type","admin");
 }
 else{
   localStorage.setItem("type","police");
 } 
 this.router.navigate(['/dashboard']);
 }else{
   alert("Wrong Credentials.");
 } 
   }); 
 }

loginA(){
  this.auth.loginAnonymous().then(data =>{
    if(data == true){
      localStorage.setItem("type","commuter");
      this.router.navigate(['/dashboard']);
    }
  });
}
 
show(temp){
 this.current=temp;
}
 hide( ){

  this.current='false';

 }

  ngOnInit() {
  }

  close() {
    this.modal.close();
}

open() {
    this.modal.open();
}
}
