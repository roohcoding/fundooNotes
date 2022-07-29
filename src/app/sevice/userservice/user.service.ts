import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpService) { }


  register(data:any){

    let header={
      headers: new HttpHeaders({
        
        'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3',
      'Content-Type': 'application/json',
      'accept': '*/*' ,

      })
    }
   return this.http.postservice('https://localhost:44307/User/Register', data, false, header)
  }

  login(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.postservice('https://localhost:44307/User/LogIn', data, false, header)
  }



  // register(){}
  // register(){}


}
