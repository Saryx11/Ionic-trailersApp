import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Film} from "../../classes/Film";

/**
 * Generated class for the TrailerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trailer',
  templateUrl: 'trailer.html',
})
export class TrailerPage {
  film: Film

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.film = navParams.get('film')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrailerPage');
  }

}
