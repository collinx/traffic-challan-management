import { FirebaseDataService } from './../firebase-data.service';
import { Router } from '@angular/router';
import { FirebaseAuthService } from './../firebase-auth.service';
import { OFFICER } from './../modules/mymodules';
import { ModalComponent } from 'ng2-bs3-modal';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent implements OnInit {

  @ViewChild('myModal')
  modal: ModalComponent;
  officer: OFFICER ;
  
  constructor(public auth: FirebaseAuthService , public router: Router, public data: FirebaseDataService )  {
     
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
