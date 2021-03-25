import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  login(name:string){
    if(name === "manager")
    this.router.navigate(['/manager-menu']);
    if(name === "waiter")
    this.router.navigate(['/waiter']);
    if(name === "kitchen")
    this.router.navigate(['/kitchen']);

  }

}
