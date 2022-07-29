import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  postservice(url:string, data:any, token: boolean=false, httpoptions:any) {
    return this.httpClient.post(url, data, token && httpoptions);
    return this.httpClient.post(url, data, token && httpoptions);

  }

  getservice() {}


  putservice() {}

  deleteservice() {}

  }

