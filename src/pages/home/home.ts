import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private inApp: InAppBrowser) {

  }

  open() {

    const browser = this.inApp.create('http://122.165.102.21:8081/', '_self', 'location=no');

  }
}
