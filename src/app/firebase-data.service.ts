import { CHALLAN, OFFENCE, OFFICER, COMMUTER } from './modules/mymodules';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseDataService {
  challanCollection: AngularFirestoreCollection<any>;
  offenceCollection: AngularFirestoreCollection<any>;
  commuterCollection: AngularFirestoreCollection<COMMUTER>;
  officerCollection: AngularFirestoreCollection<any>;
  challans: Observable<any>;
  offences: Observable<any>;
  commuters: Observable<COMMUTER[]>;
  officers: Observable<any>;



  constructor(private afs: AngularFirestore) {
    this.challanCollection = afs.collection<CHALLAN>('Challans');
    this.offenceCollection = afs.collection<OFFENCE>('Offences');
    this.commuterCollection = afs.collection<COMMUTER>('Commuters');
    this.officerCollection = afs.collection<OFFICER>('Officers');
    this.valueChangeM();
  }

  valueChangeM() {
    this.challans = this.challanCollection.valueChanges();
    this.offences = this.offenceCollection.valueChanges();
    this.commuters = this.commuterCollection.valueChanges();
    this.officers = this.officerCollection.valueChanges();
  }

  addChallan(challan: CHALLAN) {
    this.challanCollection.doc('' + challan.challan_number).set({
      'url': challan.url,
      'challan_number': challan.challan_number,
      'date': challan.date,
      'location': {
        'x': challan.location.x,
        'y': challan.location.y
      },
      'offence': {
        'code': challan.offence.code,
        'description': challan.offence.description,
        'cost': challan.offence.cost,
        'points': challan.offence.points
      },
      'person_details': {
        'name': challan.person_details.name,
        'dob': challan.person_details.dob,
        'address': challan.person_details.address,
        'contact_number': challan.person_details.contact_number,
        'dl_no': challan.person_details.dl_no,
        'dl_expiry': challan.person_details.dl_expiry,
        'vehicle_plate': challan.person_details.vehicle_plate
      },
      'vehicle': {
        'color': challan.vehicle.color,
        'make': challan.vehicle.make,
        'make_model': challan.vehicle.make_model,
        'body_type': challan.vehicle.body_type,
        'vehicle_plate': challan.vehicle.vehicle_plate,

      },
      'officer': {
        'badge_number': challan.officer.badge_number,
        'name': challan.officer.name,
        'precinct': challan.officer.precinct,
        'type': challan.officer.type,
        'uid': challan.officer.uid
      },
      'payment_due_date': challan.payment_due_date,
      'status': challan.status,
      'court': {
        'court_date': challan.court.court_date,
        'is_warrant_issued': challan.court.is_warrant_issued,
        'arrest_status': challan.court.arrest_status
      },
      'assignedto': {
        'badge_number': challan.assignedto.badge_number,
        'name': challan.assignedto.name,
        'precinct': challan.assignedto.precinct,
        'type': challan.assignedto.type,
        'uid': challan.assignedto.uid
      }
    });

  }
  addOfficer(officer: OFFICER) {
    this.officerCollection.doc(officer.badge_number).set({
      'badge_number': officer.badge_number,
      'name': officer.name,
      'precinct': officer.precinct,
      'type': officer.type,
      'uid': officer.uid
    });

  }
  addCommuter(commuter: COMMUTER) {
    this.commuterCollection.doc(commuter.dl_no).set({
      'name': commuter.name,
      'dob': commuter.dob,
      'address': commuter.address,
      'contact_number': commuter.contact_number,
      'dl_no': commuter.dl_no,
      'dl_expiry': commuter.dl_expiry,
      'vehicle_plate': commuter.vehicle_plate
    });

  }
  addOffence(offence: OFFENCE) {
    this.offenceCollection.doc('' + offence.code).set({
      'code': offence.code,
      'description': offence.description,
      'cost': offence.cost,
      'points': offence.points
    });

  }

  updateChallan(challan: CHALLAN) {
    this.afs.doc<CHALLAN>('Challans/' + challan.challan_number).update(challan);
  }
  updateOfficer(officer: OFFICER) {
    this.afs.doc<OFFICER>('Officers/' + officer.badge_number).update(officer);
  }
  updateCommuter(commuter: COMMUTER) {
    this.afs.doc<COMMUTER>('Commuters/' + commuter.dl_no).update(commuter);
  }
  updateOffence(offence: OFFENCE) {
    this.afs.doc<OFFENCE>('Offences/' + offence.code).update(offence);
  }

  deleteChallan(challan: CHALLAN) {
    this.afs.doc('Challans/' + challan.challan_number).delete();
    this.valueChangeM();
  }
  deleteOffence(offence: OFFENCE) {
    this.afs.doc('Offences/' + offence.code).delete();
    this.valueChangeM();
  }
  deleteCommuter(commuter: COMMUTER) {
    this.afs.doc('Commuters/' + commuter.dl_no).delete();
    this.valueChangeM();
  }

  deleteOfficer(officer: OFFICER) {
    this.afs.doc('Officers/' + officer.badge_number).delete();
      this.valueChangeM();
  }
}
