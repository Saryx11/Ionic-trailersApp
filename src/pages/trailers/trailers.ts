import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Film} from "../../classes/Film";
import {MovieServProvider} from "../../providers/movie-serv/movie-serv";
import {TrailerPage} from "../trailer/trailer";

@Component({
  selector: 'page-home',
  templateUrl: 'trailers.html'
})
export class TrailersPage {
  films: Array<Film>;

  constructor(public navCtrl: NavController,
              private movieService: MovieServProvider) {

  }
  ionViewDidLoad(){
    this.movieService.getFilmsRequest()
      .then(()=>{
      this.films = this.movieService.getFilmsSorted();
        console.log(this.films);
      });
  }

  filmDetails(film){
    this.navCtrl.push(TrailerPage,{film: film}).then();
  }


}
