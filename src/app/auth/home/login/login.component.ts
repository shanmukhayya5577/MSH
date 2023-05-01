import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imagePath!: string;
  LoginForm:any=FormGroup;
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
    private router:Router,
    private fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    const random = Math.floor(Math.random() * this.imagePathArrays.length);
    this.imagePath = this.imagePathArrays[random];

    this.loginFormData();
  }

  loginFormData(){
    this.LoginForm = this.fb.group({
      email_id:['',[Validators.required, Validators.pattern('[[a-zA-Z0-9+_.-.]+@+[a-zA-Z0-9]+[.]+[.a-z]{2,7}')]],
      password:['',[Validators.required]]
    })
  }

  NavigateToRegister(){
    this.router.navigate(['register'])
  }

  submitLogin(){
    if(this.LoginForm.valid){
      this.router.navigate(['profile'])
    } else{
      this.LoginForm.markAllAsTouched()
    }
  }

  navigateToForgot(){
    this.router.navigate(['forgot'])
  }

}
