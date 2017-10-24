import { CHALLAN, OFFENCE, OFFENDER, OFFICER } from './modules/mymodules';
import { FirebaseAuthService } from './firebase-auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GlobalDataService } from './global-data.service';
 
 
@Injectable()
export class FirebaseDataService {
 challanCollection: AngularFirestoreCollection<CHALLAN>;
  offenceCollection: AngularFirestoreCollection<OFFENCE>;
 offenderCollection: AngularFirestoreCollection<OFFENDER>;
  officerCollection: AngularFirestoreCollection<OFFICER>;
  challans:Observable<CHALLAN[]>;
  offences:Observable<OFFENCE[]>;
  offenders:Observable<OFFENDER[]>;
  officers:Observable<OFFICER[]>;



  constructor(private afs: AngularFirestore) { 
    this.challanCollection = afs.collection<CHALLAN>('challans');
    this.challans = this.challanCollection.valueChanges(['added', 'removed']);

    this.offenceCollection = afs.collection<OFFENCE>('offences');
    this.offences = this.offenceCollection.valueChanges(['added', 'removed']);

    this.offenderCollection = afs.collection<OFFENDER>('commuters');
    this.offenders = this.offenderCollection.valueChanges(['added', 'removed']);

    this.officerCollection = afs.collection<OFFICER>('officers');
    this.officers = this.officerCollection.valueChanges(['added', 'removed']);

  }

  addChallan(challan: CHALLAN){
    this.challanCollection.add(challan);
     
  }
  addOfficer(officer : OFFICER){
    this.officerCollection.add(officer);
   
  }
  addOffender(offender : OFFENDER){
    this.offenderCollection.add(offender);
     
  }
  addOffence(offence : OFFENCE){
    this.offenceCollection.add(offence);
    
  }

}
