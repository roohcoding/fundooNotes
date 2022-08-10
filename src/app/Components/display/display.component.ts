import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/sevice/noteservice/note.service';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() childMessage: any; //input decorator to allow the data to be passed by templates(child componenet.ts)
  @Output() updatedisplay = new EventEmitter<string>();
  @Output() displayArchive = new EventEmitter<string>();
  @Output() messageEvent = new EventEmitter<any>();
  
  childmessage:any;
  
 
  constructor(private note:NoteService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: 'fit-content', height: 'fit-content',
      data: note,
      panelClass: 'my-custom-dialog-class'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
      this.updatedisplay.emit(result);
      
    });
  }

  recieveArchiveNote(event:any){
    this.displayArchive.emit(event);
  }

  operation(value: any) {
    this.updatedisplay.emit(value);
  }
  iconRefresh($event:any){
    this.updatedisplay.emit("hello");
  }
 

}
  
 
