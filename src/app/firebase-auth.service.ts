import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseAuthService {
  user;
  constructor(private af: AngularFireAuth, private router: Router) {
    this.user = af.authState;
  }

  loginUser(email, password) {
    return this.af.auth.signInWithEmailAndPassword(email, password).then((data) => {


      this.user = firebase.auth().currentUser;
      localStorage.setItem('user', JSON.stringify(this.user));
      return true;


    }, (error) => {

      return (error['code'].split('/'))[1];
    });
  }

  loginAnonymous() {
    return this.af.auth.signInAnonymously().then((data) => {

      this.user = firebase.auth().currentUser;
      localStorage.setItem('user', JSON.stringify(this.user));
      return true;


    }, (error) => {

      return (error['code'].split('/'))[1];
    });
  }
  getUser() {

    if (localStorage.getItem('user')) {


      return JSON.parse(localStorage.getItem('user'));
    } else {



      return false;
    }
  }
  getUserType() {

    if (localStorage.getItem('type')) {


      return JSON.parse(localStorage.getItem('type'));
    } else {



      return false;
    }
  }

  logout() {
    this.af.auth.signOut();
    localStorage.removeItem('user');
    localStorage.removeItem('type')
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
