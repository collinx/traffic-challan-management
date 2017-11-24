import { Router } from '@angular/router';
import { FirebaseAuthService } from './../firebase-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public auth: FirebaseAuthService , public router: Router ) {

    if(this.auth.getUser() != false){
      const type = this.auth.getUserType();
      switch(type){
        case 'admin':  this.router.navigate(['/dashboard']);
        break;
        default:  this.router.navigate(['/challan']);
        break;
      }
    }

  }

  ngOnInit() {
  }
}
