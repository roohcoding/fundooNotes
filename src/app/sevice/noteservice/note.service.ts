import { ConfigurableFocusTrap } from '@angular/cdk/a11y';
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

archiveNote( NoteId:any){
  console.log(this.token);
  console.log(NoteId);
  let header = {
    headers: new HttpHeaders({    
      'Content-Type': 'application/json',
      'Authorization' : 'bearer ' + this.token,
    }),
  };
 
  return this.httpservice.putservice(`https://localhost:44307/api/Note/ArchiveNote?NoteId=${NoteId}`,{}, true, header);
}

trashNote(NoteId:any){
  console.log(this.token);
  console.log(NoteId);

  let header = {
    headers: new HttpHeaders({    
      'Content-Type': 'application/json',
      'Authorization' : 'bearer ' + this.token,
    }),
  };
  
  return this.httpservice.putservice(`https://localhost:44307/api/Note/Trash?NoteId=${NoteId}`,{}, true, header);
}

changecolour(data:any){
  console.log(this.token);
  console.log(data);

  let header={
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  return this.httpservice.putservice(`https://localhost:44307/api/Note/changeColour?noteId=${data.noteId}`,data, true, header)
}

delete(noteId: any){
  console.log(noteId);
  console.log("Note deleted");
  let header={
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  return this.httpservice.deleteservice(`https://localhost:44307/api/Note/${noteId}`,true,header)
}

}


