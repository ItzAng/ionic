import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }

  getPosts(){
      return this.http.get('https://jsonplaceholder.typicode.com/posts').
      pipe(tap(fn => console.log(fn)));
  }
}
