import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/sevice/noteservice/note.service';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { DataService } from 'src/app/sevice/dataservice/data.service';

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
  @Output() changeNoteEvent = new EventEmitter<string>();
 
  searchString:any='';
   message:any;
   subscription: any;
   colour:any;
   isGrid:any = true;
 
  constructor(private note:NoteService, public dialog: MatDialog, private data:DataService) { }

  ngOnInit(): void {
    this.data.currentView.subscribe((flag)=>{
      this.isGrid=flag
      console.log(this.isGrid)
    })


    this.subscription = this.data.currentMessage.subscribe((message: any) => {this.message = message;
      console.log(message);
    })

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

  // operation(value: any) {
  //   this.updatedisplay.emit(value);
  // }

  iconRefresh(event:any){
      console.log(event);
      this.colour=event;
      this.changeNoteEvent.emit(event)
    
  }

 

}
  
 
