import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/sevice/noteservice/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  Tresult:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.trashNote();
  }


  trashNote() {
    this.note.getallnotesservice().subscribe((resp:any)=>{
      console.log(resp.data);
      this.Tresult = resp.data;
      this.Tresult.reverse();
      // this.Tresult = this.Tresult.filter((object: any) => {
      //   return object.isTrash === true;
      // });
    })
  }
  updatedIcon(e:any){
    this.trashNote();

  }


}
