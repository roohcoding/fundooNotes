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
 
  isTrash: any;
  isArchive: any;
  @Input() noteObj:any;
  

  colorArray = [{Colorcode:"white", name:"White"},{Colorcode:"#f28b82", name:"Red"},{Colorcode:"#fbbc04", name:"Orange"},
  {Colorcode:"#fff475", name:"Yellow"},{Colorcode:"#ccff90", name:"Green"},{Colorcode:"#a7ffeb", name:"Teel"},
  {Colorcode:"#cbf0f8", name:"Blue"},{Colorcode:"#aecbfa", name:"Dark-Blue"},{Colorcode:"#d7aefb", name:"Purple"},
  {Colorcode:"#fdcfe8", name:"Pink"},{Colorcode:"#e6c9a8", name:"Brown"},{Colorcode:"#e8eaed", name:"Gray"}];
 
  
  constructor(private note:NoteService ,private activatedroute: ActivatedRoute, private sanv:MatSnackBar) { }
  @Output() changeNoteEvent = new EventEmitter<string>();
  ngOnInit(): void {
    this.isTrash=this.noteObj.Trash;
    this.isArchive=this.noteObj.Archieve;
  }

  trash(note:any){
    console.log(this.noteObj)
    this.isTrash = !note.Trash;
    this.note.trashNote(this.noteObj.noteID).subscribe((response: any) => {
      console.log("Note trash status changed", response.data);
      this.changeNoteEvent.emit("trashed");
    });
    this.sanv.open('Note Trashed','', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
  }

  archive(note:any){
    console.log(this.noteObj)
    this.isArchive = true;
    this.note.archiveNote(this.noteObj.noteID).subscribe((response: any) => {
      console.log("Note archive status changed", response.data);
      this.changeNoteEvent.emit(response);
    });
    this.sanv.open('Note archive status changed' ,'', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
  }

  Unarchive(note:any){
    console.log(this.noteObj)
    this.isArchive = false;
    this.note.archiveNote(this.noteObj.noteID).subscribe((response: any) => {
      console.log("Note archive status changed", response.data);
      this.changeNoteEvent.emit(response);
    });
    this.sanv.open('Note archive status changed' ,'', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
  }

  changeColour(newColour: any){
    console.log(this.noteObj)
    let data={
      noteId:this.noteObj.noteID,
      Colour:newColour,
    }
   
    this.note.changecolour(data).subscribe((response:any)=>{
      console.log("color changed",response.data);
      this.changeNoteEvent.emit(response);
    });
    this.sanv.open('Colour changed successfully' ,'', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
  }

  restore(note:any){
    // this.isTrash = !note.Trash;
    this.note.trashNote(this.noteObj.NoteId).subscribe((response: any) => {
      console.log("Note trash status changed", response.data);
      this.changeNoteEvent.emit("restored");
    });
    this.sanv.open('Note Restored' ,'', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'start'
    });
  }

  deleteforever(note:any){
    this.note.delete(this.noteObj.noteID).subscribe((response: any) => {
      console.log("Note deleted forever", response.data);
      this.changeNoteEvent.emit("deleted");
    });
    this.sanv.open('Note deleted Permanently','', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'start'
    });
  }

}

