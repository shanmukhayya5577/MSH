import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  register(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/register',data)
  }

  getregisterData(){
    return this.http.get('http://localhost:3000/register')
  }

  login(){
    return this.http.get<any>('http://localhost:3000/register')
  }

  forgotPassword(reqbody:any){
    return this.http.post<any>('http://localhost:3000/register',reqbody)
  }

  onBoardingMentor(reqBody:any){
    return this.http.post('http://localhost:3000/onbording',reqBody)
  }

  getOnboadringdata(){
    return this.http.get('http://localhost:3000/onbording');
  }



}
