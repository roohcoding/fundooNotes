import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/sevice/noteservice/note.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() childMessage: any;
 
  constructor(private note:NoteService) { }

  ngOnInit(): void {
  }
  
 
}
