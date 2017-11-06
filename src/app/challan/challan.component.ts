import { InlineResponse200 } from 'openalpr_api/src';
import { ImageFetchService } from './../image-fetch.service';
import { FirebaseDataService } from './../firebase-data.service';
import { Router } from '@angular/router';
import { FirebaseAuthService } from './../firebase-auth.service';
import { CHALLAN } from './../modules/mymodules';
import { ModalComponent } from 'ng2-bs3-modal';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as firebases from 'firebase';

@Component({
  selector: 'app-challan',
  templateUrl: './challan.component.html',
  styleUrls: ['./challan.component.css']
})
export class ChallanComponent implements OnInit {

  @ViewChild('myModal')
  modal: ModalComponent;
  files;
  challan: CHALLAN;
  workButton;
  button_name;
  fetchedData: InlineResponse200;
  constructor(public auth: FirebaseAuthService , public router: Router, public data: FirebaseDataService,
    public fetch: ImageFetchService  )  {
        
  }

  ngOnInit() {
    this.workButton = this.upload ;
    this.button_name = 'Upload';
    this.challan = new CHALLAN();
  }

  onChange(event) {
    this.files = event.srcElement.files;
 }

 upload(){

  const storageRef = firebases.storage().ref();
  const randomNumber = "sdfsdf";
  const uploadTask: firebases.storage.UploadTask = storageRef.child(`assets/${randomNumber}/`)
                                                             .put(this.files[0] );
  uploadTask.on(firebases.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {   }, (error) => {
  
        }, () => {
         
         this.challan.url = uploadTask.snapshot.downloadURL;
         console.log(this.challan.url);
         this.fetch.getsearchresults(encodeURIComponent(this.challan.url)).subscribe(res => {
          const fetchedData = res.json() as InlineResponse200;
          console.log(fetchedData);
        }
        );
        
  
        });


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
