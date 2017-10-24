import { FirebaseDataService } from './../firebase-data.service';
import { GlobalDataService } from './../global-data.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FirebaseAuthService } from './../firebase-auth.service';
import { CHALLAN, OFFICER } from './../modules/mymodules';
import { BsModalComponent } from 'ng2-bs3-modal';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent implements OnInit {

  @ViewChild('myModal')
  modal: BsModalComponent;
  officer: OFFICER ;
  
   constructor(public auth: FirebaseAuthService ,public router:Router, public data:FirebaseDataService, public global:GlobalDataService   )  { 
     this.officer = new OFFICER();
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
