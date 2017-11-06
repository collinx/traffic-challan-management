import { ImageFetchService } from './../image-fetch.service';
import { FirebaseDataService } from './../firebase-data.service';
import { Router } from '@angular/router';
import { FirebaseAuthService } from './../firebase-auth.service';
import { OFFENCE } from './../modules/mymodules';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-offence',
  templateUrl: './offence.component.html',
  styleUrls: ['./offence.component.css']
})
export class OffenceComponent implements OnInit {

  @ViewChild('myModal')
  modal: ModalComponent;
  check = false;
  offence: OFFENCE;
  saveM;
  button_name;
  constructor(public auth: FirebaseAuthService , public router: Router,
    public data: FirebaseDataService, public fetch: ImageFetchService  )  {
      this.offence = new OFFENCE();
  }


  ngOnInit() {
  }

  submit() {
    this.data.addOffence(this.offence);
    this.close();
  }

  update() {
    this.data.updateOffence(this.offence);
    this.close();
  }

  close() {
    this.modal.close();
}

open() {
    this.modal.open();
    this.offence = new OFFENCE();
    this.check = false;
    this.button_name = 'Submit';
    this.saveM = this.submit;
}

openO() {
  this.modal.open();
  this.check = true;
  this.button_name = 'Update';
  this.saveM = this.update;
}

edit(query) {
  this.offence = query;
  this.openO();
}

delete(query) {
  this.data.deleteOffence(query);
}
}
