import { GlobalDataService } from './global-data.service';
import { FirebaseDataService } from './firebase-data.service';
import { FirebaseAuthService } from './firebase-auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router' 
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ChallanComponent } from './challan/challan.component';
import { CommuterComponent } from './commuter/commuter.component';
import { OfficerComponent } from './officer/officer.component';
import { OffenceComponent } from './offence/offence.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BsModalModule } from 'ng2-bs3-modal';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { LandingComponent } from './landing/landing.component';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDVNtYTJLlZEvVBhvRVxBs9qYV_206fe54",
    authDomain: "t-challan.firebaseapp.com",
    databaseURL: "https://t-challan.firebaseio.com",
    projectId: "t-challan",
    storageBucket: "t-challan.appspot.com",
    messagingSenderId: "943717171374"
  }
};
 
const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'challan', component: ChallanComponent},
  {path: 'commuter', component: CommuterComponent},
  {path: 'officer', component: OfficerComponent},
  {path: 'offence', component: OffenceComponent},
  {path: '', component: LandingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationBarComponent,
    SideBarComponent,
    ChallanComponent,
    CommuterComponent,
    OfficerComponent,
    OffenceComponent,
    LoginComponent,
    LandingComponent,
     
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BsModalModule,
    
  ],
  providers: [FirebaseAuthService,FirebaseDataService,GlobalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
