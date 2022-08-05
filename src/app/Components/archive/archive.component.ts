import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/sevice/noteservice/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
 
  result:any;

  constructor(public dialog: MatDialog, private note:NoteService) { }

  ngOnInit(): void {
    this.archivenote();
  }

  archivenote(){
    console.log('GetArchiveNotes Api Calling..')
    this.note.getallnotesservice().subscribe((res:any)=>{
      this.result=res.data.data
      console.log(this.result)
    })
  }
  receiveMessageArchive(event:any){
    console.log(event)
    this.archivenote()
  }

}
