import { ImageFetchService } from './../image-fetch.service';
import { FirebaseDataService } from './../firebase-data.service';
import { Router } from '@angular/router';
import { FirebaseAuthService } from './../firebase-auth.service';
import { OFFENCE, OFFICER } from './../modules/mymodules';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent implements OnInit {

  @ViewChild('myModal')
  modal: ModalComponent;
  check = false;
  officer: OFFICER;
  saveM;
  button_name;
  constructor(public auth: FirebaseAuthService , public router: Router,
    public data: FirebaseDataService, public fetch: ImageFetchService  )  {
      this.officer = new OFFICER();
  }


  ngOnInit() {
  }

  submit() {
    this.officer.uid = 'null';
    this.data.addOfficer(this.officer);
    this.close();
  }

  update() {
    this.data.updateOfficer(this.officer);
    this.close();
  }

  close() {
    this.modal.close();
}

open() {
    this.modal.open();
    this.officer = new OFFICER();
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
  this.officer = query;
  this.openO();
}

delete(query) {
  this.data.deleteOfficer(query);
}
}
