import { FirebaseDataService } from './../firebase-data.service';
import { GlobalDataService } from './../global-data.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FirebaseAuthService } from './../firebase-auth.service';
import { CHALLAN } from './../modules/mymodules';
import { BsModalComponent } from 'ng2-bs3-modal';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-commuter',
  templateUrl: './commuter.component.html',
  styleUrls: ['./commuter.component.css']
})
export class CommuterComponent implements OnInit {

  @ViewChild('myModal')
  modal: BsModalComponent;
   
  
   constructor(public auth: FirebaseAuthService ,public router:Router, public data:FirebaseDataService, public global:GlobalDataService   )  { 
     
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
