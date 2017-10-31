import { GlobalDataService } from './../global-data.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FirebaseAuthService } from './../firebase-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public auth: FirebaseAuthService ,public router:Router, public af: AngularFireDatabase, public global: GlobalDataService ) {


   }

  ngOnInit() {
  }
}
