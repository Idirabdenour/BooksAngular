import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
     // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCrR0q6Ott1vuG_HtkIxtDlN_U598riKZU",
    authDomain: "database-6ba15.firebaseapp.com",
    databaseURL: "https://database-6ba15.firebaseio.com",
    projectId: "database-6ba15",
    storageBucket: "database-6ba15.appspot.com",
    messagingSenderId: "603172313635"
  };
  firebase.initializeApp(config);
  }
}
