import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;

  constructor(private httpservice : HttpService) {
    this.token=localStorage.getItem(`token`) 

}
addNote(data:any){
  console.log(this.token);
  
  let header ={
    headers : new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'bearer ' + this.token
    })
}
return this.httpservice.postservice(`https://localhost:44307/api/Note`, data, true, header)
}
getallnotes(){
  console.log(this.token);
  
  let header ={
    headers : new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'bearer ' + this.token
    })
}
return this.httpservice.getservice(`https://localhost:44307/api/Note`, true, header)
}
}
