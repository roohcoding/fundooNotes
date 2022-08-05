import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/sevice/noteservice/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() childmessage:any
  @Output() messageEvent = new EventEmitter<any>(); 
  message:any;
  
  constructor(private note:NoteService ) { }

  ngOnInit(): void {
  }

  archive(){
    console.log('Icons ArchiveNote Api Calling..')
    let data={
      noteIdList:[this.childmessage],
      isArchived: true
    }
    console.log(data)
    this.note.archieveNote(data).subscribe((res:any)=>{
      console.log(res)
      this.messageEvent.emit(this.message='Note Archived')
      
    })
    
  }

}
