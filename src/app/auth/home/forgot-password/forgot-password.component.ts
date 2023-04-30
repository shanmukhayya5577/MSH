import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  imagePath!:string;
  forgotPasswordForm!:FormGroup;
  hide = true;
  showPassword:any= true;

  imagePathArray = [
    '/assets/images/backgroundImage1.jpg',
    '/assets/images/backgroundImage2.png',
    '/assets/images/backgroundImage3.png',
  ];

  get imagePathArrays(): Array<string> {
    return this.imagePathArray;
  }
  constructor(
    private fb:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    const random = Math.floor(Math.random() * this.imagePathArrays.length);
    this.imagePath = this.imagePathArrays[random];

    this.forgotPasswordFormData();
  }

  forgotPasswordFormData(){
    this.forgotPasswordForm = this.fb.group({
      old_password:['',[Validators.required]],
      new_password:['',[Validators.required]],
      confirm_password:['',[Validators.required]]
    })
  }

  submitForgotPassword(){
    if(this.forgotPasswordForm.valid){

    } else{
      this.forgotPasswordForm.markAllAsTouched()
    }
  }

  navigateToLogin(){
    this.router.navigate(['login'])
  }

}
