import { GlobalDataService } from './../global-data.service';
import { FirebaseAuthService } from './../firebase-auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, public auth:FirebaseAuthService, public global:GlobalDataService) { }

  ngOnInit() {
  }
  logOut(){
    this.auth.logout();
  }
}
