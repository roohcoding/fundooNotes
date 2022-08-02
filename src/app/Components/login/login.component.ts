import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { UserService } from 'src/app/sevice/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user : UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
     
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     
    })
}

  // convenience getter for easy access to form fields
  

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.valid) {
      console.log("valid data",this.loginForm.value)
      let reqdata={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password,
      }
      this.user.login(reqdata).subscribe((response:any)=>{
        console.log("token : ", response.data);
          localStorage.setItem("token", response.data)
        
      })
  }
      else{
        console.log("invalid data",this.loginForm.value);
      }
      



  }

}


