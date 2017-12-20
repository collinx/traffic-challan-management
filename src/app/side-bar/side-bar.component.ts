import { GlobalDataService } from './../global-data.service';
import { FirebaseAuthService } from './../firebase-auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, public auth:FirebaseAuthService, public global:GlobalDataService) { }
  

  ngOnInit() {
  }

}
