import { FirebaseDataService } from './../firebase-data.service';
import { GlobalDataService } from './../global-data.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FirebaseAuthService } from './../firebase-auth.service';
import { CHALLAN } from './../modules/mymodules';
import { BsModalComponent } from 'ng2-bs3-modal';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-challan',
  templateUrl: './challan.component.html',
  styleUrls: ['./challan.component.css']
})
export class ChallanComponent implements OnInit {
  @ViewChild('myModal')
  modal: BsModalComponent;
  files;
  webaddress;
  
   constructor(public auth: FirebaseAuthService ,public router:Router, public data:FirebaseDataService, public global:GlobalDataService   )  { 
    
  }
  

  ngOnInit() {
  }

  onChange(event) {
    this.files = event.srcElement.files;
    
  
 }
 submit(){
   
 }

  close() {
    this.modal.close();
}

open() {
    this.modal.open();
}
}
