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

updatenote(data:any,noteID:any){
  let header={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+ this.token
    })
  }
    return this.httpservice.putservice(`https://localhost:44307/api/Note/UpdateNote/${noteID}`, data, true, header)
}

getallnotesservice() {


  let header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization':  'Bearer ' + this.token		
    })

  }
  
  return this.httpservice.getservice(`https://localhost:44307/api/Note`,true,header)
  
}

archieveNote(data:any,noteId:any) {
  console.log(data,noteId);
  let header = {
    headers: new HttpHeaders({
      
      'Content-Type': 'application/json',
      'Authorization' : 'bearer '+ this.token,

    }),
  };
  return this.httpservice.putservice( `https://localhost:44307/api/Note/ArchiveNote/${noteId}`, data, true,header );
}


}