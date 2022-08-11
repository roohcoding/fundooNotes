import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/sevice/noteservice/note.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  
  @Output() updatedisplay = new EventEmitter<string>();
  @Output() changeNoteEvent = new EventEmitter<string>();
  
  parentMessage:any;
 

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getNotes()
  }
  getNotes(){
    this.note.getallnotes().subscribe((res:any)=>{
      console.log(res.data);
      this.parentMessage = res.data;
      this.parentMessage.reverse();
      this.parentMessage = this.parentMessage.filter((object: any) => {
        return object.isTrash=== false && object.isArchive === false
       
      })
      
      
    })
    
    }
    //for creating note
    receiveMessage(event:any){
      console.log(event);
      this.getNotes();
  }
 
//update
  updatedData(event:any) {
    console.log(event);
    this.getNotes();
  }

  receiveMessagearchive(event:any){
    console.log(event)
    this.getNotes()
  }
  updatedIcon(event:any){
    console.log(event)
    this.getNotes();
  }
  // iconRefresh(event:any){
  //   console.log(event)
  //   this.getNotes();
  // }
  

}
