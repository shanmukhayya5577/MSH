import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toopbar',
  templateUrl: './toopbar.component.html',
  styleUrls: ['./toopbar.component.css']
})
export class ToopbarComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  exit(){
    this.router.navigate(['login'])
  }
}
