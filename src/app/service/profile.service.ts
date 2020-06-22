import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private clientid = 'f6a8654e88b31dc03ef3 ';
  private clientsecret = '818df6e8ca7a0e305298762504a148fd033efff3';
  constructor(private http: HttpClient) {
    console.log ('Service is ready');
    this.username = 'sheready';
   }
   getProfileInfo(){
    // tslint:disable-next-line: max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);

  }
  getProfileRepos(){
    // tslint:disable-next-line: max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);

  }
  updateProfile(username: string){
    this.username = username;
  }
}

