import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Notifications } from '@mobiscroll/angular';
import { UsersAuth } from '../UsersAuth.model'
import { WorkersService } from '../workers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public router: Router,
    private workers: WorkersService, private notify: Notifications) { }

  ngOnInit() {
  }

  login(username:string, password:string){
    let type = this.workers.getUserAuth(username,password);
    let name = this.workers.getUserAuthName(username, password);
    if(type == "manager")
      this.router.navigate(['/manager-menu'], {queryParams: {id: name}});
    else if(type === "waiter")
      this.router.navigate(['/waiter'], {queryParams: {id: name}});
    else if(type === "kitchen")
      this.router.navigate(['/kitchen'], {queryParams: {id: name}});
    else{
      this.notify.toast({
        message: "אינך רשאי להיכנס"
      });
    }    
  }

}
