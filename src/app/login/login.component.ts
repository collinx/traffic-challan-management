import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseAuthService } from './../firebase-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email='';
  password= '';
  emailforgot='';
  current='false';


  constructor(public auth: FirebaseAuthService , public router:Router  ) {
    if(this.auth.getUser() != false){
     this.router.navigate(['/dashboard']);
   }

}

login() {

  this.auth.loginUser(this.email,this.password).then(data => {
 if(data === true){

 if(this.email.includes('admin')){
   localStorage.setItem('type',JSON.stringify('admin'));
 } else if(this.email.includes('wco')){
   localStorage.setItem('type',JSON.stringify('wireless'));
 } else if(this.email.includes('to')){
  localStorage.setItem('type',JSON.stringify('traffic'));
}else if(this.email.includes('po')){
  localStorage.setItem('type',JSON.stringify('police'));
}
 this.router.navigate(['/dashboard']);
 }else{
   alert('Wrong Credentials.');
 }
   });
 }

loginA(){
  this.auth.loginAnonymous().then(data => {
    if (data === true){
      localStorage.setItem('type',JSON.stringify('commuter') );
      this.router.navigate(['/challan']);
    }
  });
}

show(temp){
 this.current = temp;
}
 hide( ){

  this.current = 'false';

 }

  ngOnInit() {
  }


}
