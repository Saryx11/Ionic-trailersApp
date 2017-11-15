import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://10.1.1.117:8080/trailers'

@Injectable()
export class ApiServProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiServProvider Provider');
  }

  getFilms(){
    return this.http.get(`${URL}`);
  }

}
