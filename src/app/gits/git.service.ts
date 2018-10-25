import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http: HttpClient) {


  }

  return() {
    return this.http.get('https://api.github.com/users/FrancisSakwa89');

  }
getUserRepos() {
  return this.http.get('https://api.github.com/users/FrancisSakwa89/repos');

}


}