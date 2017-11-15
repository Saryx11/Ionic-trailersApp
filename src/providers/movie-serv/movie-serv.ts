import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Film} from "../../classes/Film";
import {ApiServProvider} from "../api-serv/api-serv";
import {Trailer} from "../../classes/Trailer";

@Injectable()
export class MovieServProvider {
  films: Array<Film> = [];

  constructor(private apiService: ApiServProvider) {
    console.log('Hello MovieServProvider Provider');
  }

  getFilmsRequest() {
    return new Promise((resolve, reject) => {
      this.apiService.getFilms()
        .subscribe((value: any) => {
          this.films = value.map((film) => new Film(
            film.title,
            film.releasedate,
            film.studio,
            film.poster,
            film.location,
            film.rating,
            film.genre,
            film.directors,
            film.actors,
            film.trailers.map((trailer) => new Trailer(
              trailer.postdate,
              trailer.url,
              trailer.type,
              trailer.exclusive,
              trailer.hd)
            )
          ));
        }, () => {
          console.log('Erreur');
          reject();
        }, () => {
          resolve();
        });
    });
  }

  getFilmsSorted() {
    this.sortFilms();
    return [...this.films];
  }

  sortFilms() {
    this.films.sort(this.sortByTitle);
  }

  sortByTitle(f1, f2) {
    if (f1.title < f2.title)
      return -1;
    if (f1.title > f2.title)
      return 1;
    return 0;
  }
}
