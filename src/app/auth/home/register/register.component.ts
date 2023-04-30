import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  imagePath!: string;
  registerForm:any= FormGroup;

  constructor(
    private fb: FormBuilder,
    private router:Router
  ) { }

  imagePathArray = [
    '/assets/images/backgroundImage1.jpg',
    '/assets/images/backgroundImage2.png',
    '/assets/images/backgroundImage3.png',
  ];

  get imagePathArrays(): Array<string> {
    return this.imagePathArray;
  }

  ngOnInit(): void {
    const random = Math.floor(Math.random() * this.imagePathArrays.length);
    this.imagePath = this.imagePathArrays[random];

    this.registerFormValues();
  }

  registerFormValues() {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.pattern(/^[A-Za-z -]*$/)]],
      last_name: [''],
      mobile_number: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      email_id: ['', [Validators.required, Validators.pattern('[[a-zA-Z0-9+_.-.]+@+[a-zA-Z0-9]+[.]+[.a-z]{2,7}')]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    })
  }

  handleAlphaChar(event:any) {
    if (
      (event.charCode > 32 && event.charCode < 48) ||
      (event.charCode > 57 && event.charCode < 127)
    ) {
      event.preventDefault();
    }
  }

  submitRegister() {
    if (this.registerForm.valid) {
    } else{
      this.registerForm.markAllAsTouched()
    }
  }

  NavigateToLogin(){
    this.router.navigate(['login'])
  }

}
