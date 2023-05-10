import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.user =   localStorage.getItem('user');
  }


  navigateToDashBoard(){
    this.route.navigate(['dashboard'])
  }
}
