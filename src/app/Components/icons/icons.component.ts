import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/sevice/noteservice/note.service';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
 
  isTrash: boolean = false;
  isArchive: boolean = false;
  @Input() noteObj:any;
  

  colorArray = [{Colorcode:"white", name:"White"},{Colorcode:"#f28b82", name:"Red"},{Colorcode:"#fbbc04", name:"Orange"},
  {Colorcode:"#fff475", name:"Yellow"},{Colorcode:"#ccff90", name:"Green"},{Colorcode:"#a7ffeb", name:"Teel"},
  {Colorcode:"#cbf0f8", name:"Blue"},{Colorcode:"#aecbfa", name:"Dark-Blue"},{Colorcode:"#d7aefb", name:"Purple"},
  {Colorcode:"#fdcfe8", name:"Pink"},{Colorcode:"#e6c9a8", name:"Brown"},{Colorcode:"#e8eaed", name:"Gray"}];
 
  
  constructor(private note:NoteService ,private activatedroute: ActivatedRoute, private sanv:MatSnackBar) { }
  @Output() changeNoteEvent = new EventEmitter<string>();
  @Output()displayicons  = new EventEmitter<string>();
  
 
 


  ngOnInit(): void {
    let del = this.activatedroute.snapshot.component;
    if (del == TrashComponent) {
      this.isTrash = true;
      console.log(this.noteObj);
    }
    if (del == ArchiveComponent) {
      this.isArchive = true;
      console.log(this.noteObj);
    }
  
  }

  trash(){
    let data = {
      isTrash: true,
    };
    console.log(this.noteObj);
    console.log('Note is trashed');
    this.note.trashNote(data, this.noteObj.noteID).subscribe((response: any) => {
      console.log('Trash Notes are :', response);
      this.changeNoteEvent.emit(response);
    });
    this.sanv.open('Note Trashed','', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
  }

  archive(){
    let data = {
      isArchive: true,
    };
    console.log(this.noteObj);
    console.log('note is archieve');
    this.note.archiveNote(data,this.noteObj.noteID).subscribe((response: any) => {
      console.log('Archieve Notes are :', response);
      this.changeNoteEvent.emit(response);
    });
    this.sanv.open('Note archieved' ,'', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
  }

  Unarchive(){
    let data = {
      isArchive: false,
    };
    console.log('note is archieve');
    this.note.archiveNote(data,this.noteObj.noteID).subscribe((resp: any) => {
      console.log('Archieve Notes are :', resp);
      this.changeNoteEvent.emit(resp);
    });
    this.sanv.open('Note unarchived' ,'', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
  }

  changeColour(newColour: any){
   console.log(newColour)
    let data={
      noteId:this.noteObj.noteID,
      Colour:newColour,
    }
   
    this.note.changecolour(data).subscribe((respons:any)=>{
      console.log("color changed",respons);
      this.changeNoteEvent.emit(respons);
    });
    this.sanv.open('Colour changed successfully' ,'', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
  }

  restore(){
    let data = {
      isTrash: false,
    };
    console.log('Note is restored');
    this.note.trashNote(data, this.noteObj.noteID).subscribe((rep: any) => {
      console.log('Restore note :', rep);
      this.changeNoteEvent.emit(rep);
    });
    this.sanv.open('Note Restored' ,'', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'start'
    });
  }

  deleteforever(){
    let data = {
      isTrash: true,
    };
    console.log('Note is deleted');
    this.note.delete(this.noteObj.noteID).subscribe((re: any) => {
      console.log('Deleted Notes are :', re);
      this.changeNoteEvent.emit(re);
    });
    this.sanv.open('Note deleted Permanently','', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'start'
    });
  }

}

