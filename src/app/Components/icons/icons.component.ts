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

 
    
  }


