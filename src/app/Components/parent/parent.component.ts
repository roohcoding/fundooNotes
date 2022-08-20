import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/sevice/userservice/user.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  name: string;  
  message: any;  
  sendToChild: string; 
  veg:any;
  // vegarray: any[]=[{"name":"onion"},{"name":"potato"},{"name":"ladyfinger"}]

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.veg = new Array<string>('potato', 'onion', 'tomato');
  }
  getResponse($event:any) {  
    this.message = $event;  
  }  
  submit() {  
    let data={
      "email":'natewadruhika@gmail.com',
      "password":'Ruhika@1234'
    }
    this.user.login(data).subscribe((res:any)=>{
      console.log("token : ",res.data )

    })
    this.sendToChild = this.name;  
  } 

}
