import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  openMentor:boolean=false;
  getAlldata:any;

  constructor(private route:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getOnboadringdata().subscribe(res=>{
      this.getAlldata = res;
      console.log(this.getAlldata);

    })
  }

  navigateToStartsUp(){
    this.route.navigate(['startsup/startup'])
  }

  openMenter(){
    this.openMentor = true
  }
}
