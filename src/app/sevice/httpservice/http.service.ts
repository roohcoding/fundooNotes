import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
 

  constructor(private httpClient: HttpClient) { }

  postservice(url:string, data: any, token: boolean=false, httpOption :any){
    
    return this.httpClient.post(url, data, token && httpOption)
    
  }

  putservice(url:string, data: any, token: boolean=false, httpOption :any) {

    return this.httpClient.put(url, data, token && httpOption)
  }

  getservice(url:string, token: boolean=false, httpOption :any) {
    return this.httpClient.get(url,  token && httpOption)
  }


 

  deleteservice(url:string, token: boolean=false, httpOption :any)
  {
    return this.httpClient.delete( url,  token && httpOption);
  }

  }

