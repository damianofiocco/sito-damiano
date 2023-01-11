import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrlLista = 'https://api.github.com/users?per_page=10';
  apiUrlSingolo = 'https://api.github.com/user?';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.apiUrlLista}`)
  }


  getUser(username: string){
    console.log(username);
    return this.http.get(`${this.apiUrlSingolo}/${username}`)
  }
}
