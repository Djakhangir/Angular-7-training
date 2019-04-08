import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // imported the  package

@Injectable({
  providedIn: 'root'
})
export class DataService { 

  constructor( private http: HttpClient) { }

  methodInService(){ // method called in home ts file
    return this.http.get('https://reqres.in/api/users') // fake api to practise
  }
}
