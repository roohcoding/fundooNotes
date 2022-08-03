import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/sevice/noteservice/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  @Output() updatedisplay = new EventEmitter<string>();
  title:any;
  description:any;
  noteID:any;
  colour:any;
 
 

  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private note:NoteService
  ) {
    this.title=this.data.title;
    this.description = this.data.description;
    this.noteID= this.data.noteID;
    this.colour = this.data.colour
  }

  ngOnInit(): void {
   
    console.log("inside update" ,this.data);
   
  }
 
  

  onSubmit(){
    let data={
      'title': this.title,
      'description': this.description,
      'colour': "white"
    }
   
    this.note.updatenote(data,this.noteID).subscribe((res:any)=>{
      console.log("note is updated:  ",res);
      this.updatedisplay.emit(res)
    })
   
  }
 

  onNoClick(): void {
    this.dialogRef.close();
  }

}
