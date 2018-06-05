import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAn6640d9q5n_TLl1U6f9mpxPTokMhAxJQ',
      authDomain: 'drinktea-ng-recipe-book.firebaseapp.com'
    });
  }
}
