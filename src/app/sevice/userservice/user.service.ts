import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpService) { }


  register(data:any){
    let header ={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        
      })
    }

   return this.http.postservice('https://localhost:44307/User/Register', data, false, header)
  }
   
  

  login(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'accept': '*/*'
      })
    }
    return this.http.postservice(`https://localhost:44307/User/LogIn/${data.email}/${data.password}`, data, false, header)
  }



  forgotpassword(data : any){
    let header ={
      headers : new HttpHeaders({
        'content-type': 'application/json'
      })
    }

    return this.http.postservice(`https://localhost:44307/User/Forgotpassword/${data.email}`, data, false, header)
  }




  // restpassword(data : any){
  //   let header ={
  //     headers : new HttpHeaders({
  //       'content-type': 'application/json'
  //     })
  //   }

  //   return this.http.postservice('https://localhost:44307/User/Resetpassword', data, false, header)
  // }


}
