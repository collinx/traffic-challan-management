import { ImageFetchService } from './../image-fetch.service';
import { FirebaseDataService } from './../firebase-data.service';
import { Router } from '@angular/router';
import { FirebaseAuthService } from './../firebase-auth.service';
import { CHALLAN, InlineResponse200, COMMUTER } from './../modules/mymodules';
import { ModalComponent } from 'ng2-bs3-modal';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as firebases from 'firebase';
import { ActivatedRoute } from '@angular/router/src/router_state';

@Component({
  selector: 'app-challan',
  templateUrl: './challan.component.html',
  styleUrls: ['./challan.component.css']
})
export class ChallanComponent implements OnInit {

  @ViewChild('upload')
  uploadImage: ModalComponent;

  @ViewChild('loading')
  loading: ModalComponent;

  @ViewChild('license')
  license: ModalComponent;

  @ViewChild('commuterInfo')
  commuterInfo: ModalComponent;

  @ViewChild('vehicleInfo')
  vehicleInfo: ModalComponent;

  @ViewChild('offenceInfo')
  offenceInfo: ModalComponent;

  @ViewChild('assignInfo')
  assignInfo: ModalComponent;

  @ViewChild('challanInfo')
  challanInfo: ModalComponent;

  @ViewChild('officerInfo')
  officerInfo: ModalComponent;

  @ViewChild('payInfo')
  payInfo: ModalComponent;


  backdrop = "static";
  files;
  cur: CHALLAN;
  challan: CHALLAN;
  fetchedData: InlineResponse200;
  constructor(public auth: FirebaseAuthService, public router: Router, public data: FirebaseDataService,
    public fetch: ImageFetchService, public route: ActivatedRoute) {
     
  }

  ngOnInit() {
    this.challan = new CHALLAN();
    this.fetchedData = new InlineResponse200();
    this.getStatus();
    if(status == "success"){
      this.cur = JSON.parse(localStorage.getItem('challan'));
      alert('Payment done for challan ' + this.cur.challan_number);
      this.cur.status = 'paid';
      this.data.updateChallan(this.cur);
    }else if(status == "cancel"){
      alert('Payment not done due to cancellation by user');
    }else if(status == 'failure'){
      alert('Payment Failed. Sorry for any inconvience.');
    }
    this.openPay(this.challan);
  }

  getStatus(): void {
    const status = this.route.snapshot.paramMap.get('status');
  }

  onChange(event) {

    this.files = event.srcElement.files;
  }

  Upload() {

    this.closeUI();
    this.openL();
    const storageRef = firebases.storage().ref();
    const randomNumber = (new Date()).getTime();
    const uploadTask: firebases.storage.UploadTask = storageRef.child(`assets/${randomNumber}/`)
      .put(this.files[0]);
    uploadTask.on(firebases.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => { }, (error) => {

      }, () => {

        this.challan.url = uploadTask.snapshot.downloadURL;
        this.fetch.getsearchresults(encodeURIComponent(this.challan.url)).subscribe(res => {
          this.fetchedData = res.json() as InlineResponse200;
          console.log(this.fetchedData);
          if(this.fetchedData.results.length != 0){
            this.challan.vehicle.vehicle_plate = this.fetchedData.results[0].plate;
            console.log(this.fetchedData);
            this.closeL();
            this.openLi();
          }
          // tslint:disable-next-line:one-line
          else{
             this.closeL();
             alert('Undetectable Angle of Image');
          }
         
        }
        );


      });


  }

  callType(value) {
    this.challan.vehicle.vehicle_plate = value;

  }

  callTypeBody(value) {
    this.challan.vehicle.body_type = value;

  }
  callTypeColor(value) {
    this.challan.vehicle.color = value;

  }
  callTypeMake(value) {
    this.challan.vehicle.make = value;

  }
  callTypeModel(value) {
    this.challan.vehicle.make_model = value;

  }

  callTypeCode(value) {

    this.data.offences.forEach(offence => {
      offence.forEach(data => {
        if (data.code == value) {
          this.challan.offence = data;
        }
      });
    });


  }

  callTypeOff(value) {
    
        this.data.officers.forEach(officer => {
          officer.forEach(data => {
            if (data.badge_number == value) {
              this.challan.officer = data;
            }
          });
        });
    
    
      }


  proceedLi() {
    this.data.commuters.forEach(commuter => {
      commuter.forEach(data => {
        if (data.vehicle_plate == this.challan.vehicle.vehicle_plate) {
          this.challan.person_details = data;
        }
      });
    });

    this.closeLi();
    this.openCI();
  }

  proceedCI() {


    this.closeCI();
    this.challan.vehicle.body_type = this.fetchedData.results[0].vehicle.body_type[0].name;
    this.challan.vehicle.color = this.fetchedData.results[0].vehicle.color[0].name;
    this.challan.vehicle.make = this.fetchedData.results[0].vehicle.make[0].name;
    this.challan.vehicle.make_model = this.fetchedData.results[0].vehicle.make_model[0].name;
    this.openV();
  }

  proceedV() {


    this.closeV();
    this.data.offences.forEach(offence => {
      this.challan.offence = offence[0];

    });


    this.openOf();
  }

  proceedOf() {


    this.closeOf();
    this.data.officers.forEach(officer => {
      this.challan.officer = officer[0];

    });

    this.challan.date = new Date(Date.now()).toISOString().substring(0, 10);
    this.challan.location.x = 0;
    this.challan.location.y = 0;
    this.challan.payment_due_date = new Date((new Date(this.challan.date)).getTime() + 1814400000).toISOString().substring(0, 10);
    this.challan.status = 'open';
    this.openOff();
  }

  changeS(){
    this.challan.payment_due_date = new Date((new Date(this.challan.date)).getTime() + 1814400000).toISOString().substring(0, 10);
  }
  submit() {
    this.challan.challan_number = new Date().getTime();
    this.challan.court.court_date = new Date((new Date(this.challan.date)).getTime() + 7776000000).toISOString().substring(0, 10);
    this.challan.court.is_warrant_issued = false;
    this.challan.court.arrest_status = 'none';
    this.challan.assignedto = this.challan.officer;
    this.data.addChallan(this.challan);
    this.closeOff();

  }

  closeUI() {
    this.uploadImage.close();
  }

  openUI() {
    this.challan = new CHALLAN();
    this.fetchedData = new InlineResponse200();
    this.uploadImage.open();
  }

  closeL() {
    this.loading.close();
  }

  openL() {
    this.loading.open();
  }

  closeLi() {
    this.license.close();
  }

  openLi() {
    this.license.open();
  }

  closeCI() {
    this.commuterInfo.close();
  }

  openCI() {
    this.commuterInfo.open();
  }

  closeV() {
    this.vehicleInfo.close();
  }

  openV() {
    this.vehicleInfo.open();
  }

  closeOf() {
    this.offenceInfo.close();
  }

  openOf() {
    this.offenceInfo.open();
  }

  closeOff() {
    this.officerInfo.close();
  }

  openOff() {
    this.officerInfo.open();
  }

  closePay() {
    this.payInfo.close();
  }

  openPay(value) {
    this.cur = value;
    this.payInfo.open();
  }

  pay(){
    localStorage.setItem('challan', JSON.stringify(this.cur));
  }
}
