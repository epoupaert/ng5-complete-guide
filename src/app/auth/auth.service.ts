import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  private authenticated = false;

  signup(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  signin(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => this.authenticated = true
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken(): Observable<any> {
    return Observable.fromPromise(
      firebase.auth().currentUser.getIdToken()
    );
  }

  isAuthenticated() {
    return this.authenticated;
  }

  logout() {
    firebase.auth().signOut();
    this.authenticated = false;
  }
}
