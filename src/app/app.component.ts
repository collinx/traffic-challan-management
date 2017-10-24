import { GlobalDataService } from './global-data.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FirebaseAuthService } from './firebase-auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  check;
  constructor(public auth: FirebaseAuthService ,public router:Router, public af: AngularFireDatabase, public global:GlobalDataService   ) { 
    if(this.auth.getUser() == false){
     this.check=false;
   }else{
     this.check = true;
   }
}
}
