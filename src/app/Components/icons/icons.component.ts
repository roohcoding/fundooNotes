import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/sevice/noteservice/note.service';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
 
  isTrash:boolean=false;
  isArchive:boolean=false;
  @Input() notedata:any;
  
  

  colorArray = [{Colorcode:"white", name:"White"},{Colorcode:"#f28b82", name:"Red"},{Colorcode:"#fbbc04", name:"Orange"},
  {Colorcode:"#fff475", name:"Yellow"},{Colorcode:"#ccff90", name:"Green"},{Colorcode:"#a7ffeb", name:"Teel"},
  {Colorcode:"#cbf0f8", name:"Blue"},{Colorcode:"#aecbfa", name:"Dark-Blue"},{Colorcode:"#d7aefb", name:"Purple"},
  {Colorcode:"#fdcfe8", name:"Pink"},{Colorcode:"#e6c9a8", name:"Brown"},{Colorcode:"#e8eaed", name:"Gray"}];
 
  
  constructor(private note:NoteService ,private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    let del= this.activatedroute.snapshot.component;
    if (del == TrashComponent) {
      this.isTrash = true;
      console.log(this.isTrash);
    }
    if(del == ArchiveComponent)
    {
      this.isArchive=true;
      console.log(this.isArchive);
    }
  }

  archieve() { 
    let data = {
      isArchive: true,
    };
    console.log('note is archieve');
    this.note.archiveNote(data,this.notedata.noteId).subscribe((res: any) => {
        console.log('Archieve Notes are :', res);  
      });   
  }

  trash(){
   
    let data = {
      isTrash: true,
    };
    console.log('note is deleted');
    this.note.trashNote(data,this.notedata.noteId).subscribe((response: any) => {
        console.log('Deleted Notes are :', response);
      });   
  }

  // ChangeColor(newcolor: any){
  //   let data={
  //     noteId:this.childmessage.noteId,
  //     Colour:newcolor,
  //   }
  //   this.note.ChangeColor(data).subscribe((response:any)=>{
  //     console.log("color changed",response.data);
  //     this.messageEvent.emit(newcolor);
  //   });
 
    
  // }
}

