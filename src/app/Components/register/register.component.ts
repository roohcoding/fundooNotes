import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/sevice/userservice/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  submitted = false;
  
  

  constructor(private formBuilder: FormBuilder, private user: UserService) {};

 

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.valid) {
      console.log ("valid data",this.registerForm.value)
      let data={
        
          firstName: this.registerForm.value.FirstName,
          lastName: this.registerForm.value.LastName,
          email: this.registerForm.value.Email,
          password: this.registerForm.value.Password,
           
        

      }
      this.user.register(data).subscribe((result:any)=>{
        console.log("register response",result);
      })

      }
      else{
        console.log ("Invalid data",this.registerForm.value)
      }
     
      

      
  }
}
  




