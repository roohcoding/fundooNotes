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

  archivenote() {
    this.note.getallnotesservice().subscribe((res: any) => {
      console.log(res.data);
       this.result=res.data;
       this.result.reverse();
       this.result = this.result.filter((object: any) => {
        return object.isArchive === true;
      })
     
    });
  }
  receiveMessagearchive(event:any){
    console.log(event)
    this.archivenote()
  }

}






