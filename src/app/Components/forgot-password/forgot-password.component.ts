import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/sevice/userservice/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
         
      email: ['', [Validators.required, Validators.email]],
      
      
  });
}// get f() { return this.forgetPasswordForm.controls; }

onSubmit() {
  this.submitted = true;

  if (this.forgotPasswordForm.invalid) {
    console.log("valid data", this.forgotPasswordForm.value);
    let data={
      "email" : this.forgotPasswordForm.value.email
    }
    this.user.forgotpassword(data).subscribe((sai :any)=>{
        console.log("email request ====== ", sai);
    })

  }
  else{
    console.log("invalid data", this.forgotPasswordForm.value);
  }

  }

}
