import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  gettoken(){  
    return !!localStorage.getItem("token");  
    }
}
