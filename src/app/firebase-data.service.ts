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
      'location': challan.location,
      'offence': challan.offence,
      'person_details': challan.person_details,
      'vehicle': challan.vehicle,
      'officer': challan.officer,
      'payment_due_date': challan.payment_due_date,
      'status': challan.status,
      'court': challan.court,
      'assignedto': challan.assignedto
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
