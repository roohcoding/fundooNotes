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
  
  result:any;
 
  constructor(private note:NoteService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '350px',
      height:'180px',
     data:note,
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
      this.updatedisplay.emit(result);
      
    });
  }

  receiveMessageArchive(event: any) {
    this.displayArchive.emit(event);
  }

  operation(value: any) {
    this.updatedisplay.emit(value);
  }

 

}
  
 
