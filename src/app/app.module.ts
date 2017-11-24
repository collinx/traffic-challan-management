import { ImageFetchService } from './image-fetch.service';
import { environment } from './../environments/environment';
import { GlobalDataService } from './global-data.service';
import { FirebaseDataService } from './firebase-data.service';
import { FirebaseAuthService } from './firebase-auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { LandingComponent } from './landing/landing.component';
import { Http, Response, RequestOptions, Headers, HttpModule  } from '@angular/http';
import { ClipboardModule } from 'ngx-clipboard';
import { DummyComponent } from './dummy/dummy.component';

const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'challan/:status', component: ChallanComponent},
  {path: 'challan', component: ChallanComponent},
  {path: 'commuter', component: CommuterComponent},
  {path: 'officer', component: OfficerComponent},
  {path: 'dummy', component: DummyComponent},
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
    DummyComponent,

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
    Ng2Bs3ModalModule,
    HttpModule,
  ],
  exports: [ RouterModule ],
  providers: [FirebaseAuthService, FirebaseDataService, GlobalDataService, ImageFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
