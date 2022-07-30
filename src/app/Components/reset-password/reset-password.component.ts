import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/sevice/userservice/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  submitted = false;
  hide = true;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

 

  onSubmit() {
    this.submitted = true;

    if (this.resetPasswordForm.invalid) {
      console.log("valid data", this.resetPasswordForm.value);
      let data={
        "password" : this.resetPasswordForm.value.password,
        "confirmPassword" : this.resetPasswordForm.value.confirm
      }
      this.user.forgotpassword(data).subscribe((ruh :any)=>{
          console.log("email request ====== ", ruh );
      })
  
    }
    else{
      console.log("invalid data", this.resetPasswordForm.value);
    }
  
    }
  

  }


