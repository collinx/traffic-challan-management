import { ImageFetchService } from './../image-fetch.service';
import { FirebaseDataService } from './../firebase-data.service';
import { Router } from '@angular/router';
import { FirebaseAuthService } from './../firebase-auth.service';
import { CHALLAN, COMMUTER } from './../modules/mymodules';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-commuter',
  templateUrl: './commuter.component.html',
  styleUrls: ['./commuter.component.css']
})
export class CommuterComponent implements OnInit {

  @ViewChild('myModal')
  modal: ModalComponent;
  check = false;
  commuter: COMMUTER;
  saveM;
  button_name;
  constructor(public auth: FirebaseAuthService , public router: Router,
    public data: FirebaseDataService, public fetch: ImageFetchService  )  {
      if(this.auth.getUser() != false){
        const type = this.auth.getUserType();
        switch(type){
          case 'admin':
          break;
          default:  this.router.navigate(['/challan']);
          break;
        }
      }else{
          this.router.navigate(['/login']);
      }
      
      this.commuter = new COMMUTER();
  }


  ngOnInit() {
  }

  submit() {
    this.data.addCommuter(this.commuter);
    this.close();
  }

  update() {
    this.data.updateCommuter(this.commuter);
    this.close();
  }

  close() {
    this.modal.close();
}

open() {
    this.modal.open();
    this.commuter = new COMMUTER();
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
  this.commuter = query;
  this.openO();
}

delete(query) {
  this.data.deleteCommuter(query);
}
}
