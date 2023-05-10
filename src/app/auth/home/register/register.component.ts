import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  imagePath!: string;
  registerForm!:FormGroup;
  resEmail:any
  getRegisterData: any ;

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private service:ServiceService,
    private toast:ToastrService

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
      first_name: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(30),Validators.pattern(/^[A-Za-z -]*$/)]],
      last_name: ['',[Validators.pattern(/^[A-Za-z -]*$/)]],
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
      this.service.register(this.registerForm.value).subscribe(res=>{
        console.log( this.resEmail);
        this.resEmail = res['email_id'];
        if(this.resEmail === res['email_id']){
          this.toast.warning('Already Registered Please Login')
        } else {
          this.toast.success('Registered Successfully')
          this.router.navigate(['login']);
        }
      })
    } else{
      this.registerForm.markAllAsTouched();
      this.toast.warning('Please Fill All Required Data')
    }
  }

  NavigateToLogin(){
    this.router.navigate(['login'])
  }

}


// this.service.getregisterData().subscribe(res=>{
      //   console.log('calling 1st API');
      //   this.getRegisterData=res;
      //   this.getRegisterData.find((val:any)=>{
      //     console.log(val)
      //     if(val['email_id'] === this.registerForm?.get('email_id')?.value){
      //       this.toast.warning('Already Registered Please Login');

      //     } else {
      //       // this.toast.warning('Already Registered Please Login');
      //       this.service.register(this.registerForm.value).subscribe(res=>{
      //         console.log('calling 2st API');
      //         this.toast.success('Registered Successfully')
      //         this.router.navigate(['login']);
      //        },
      //        error =>{
      //         this.toast.error(error)
      //       })
      //     }
      //   })
      // }, error=>{
      //   this.toast.error(error)
      // })
