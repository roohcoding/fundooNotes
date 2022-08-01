import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  isShow=false;

  constructor() { }

  ngOnInit(): void {
  }

  show(){
    this.isShow = true;
  }

  close(){
    this.isShow = false;
  }
}
