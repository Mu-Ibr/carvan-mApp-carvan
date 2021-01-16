import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../workers.service';
import {Worker} from '../Worker.model'
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-workers-managment',
  templateUrl: './workers-managment.page.html',
  styleUrls: ['./workers-managment.page.scss'],
})
export class WorkersManagmentPage implements OnInit {
  workers: Worker[];
  loadedWorker: Worker;

  constructor(
    private workerService: WorkersService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    ) { }

  ngOnInit() {
    this.workers = this.workerService.workers;
  }
  
  async addNewWorker() {
    const alert = await this.alertController.create({
      header: 'הוסף עובד',
      inputs: [
        {
          name: 'name',
          id: 'name',
          type: 'text',
          placeholder: 'שם העובד'
        },
        {
          name: 'id',
          id: 'id',
          type: 'text',
          placeholder: 'מס עובד'
        },
        {
          name: 'image',
          id: 'image',
          type: 'text',
          placeholder: 'שנת התחלה'
        },
        {
          name: 'type',
          id: 'type',
          type: 'text',
          placeholder: 'תחום'
        }
      ],
      buttons: [
        {
          text: 'ביטול',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'אשר',
          handler: data=>{
            this.workers.push(new Worker(data.name, data.id, data.image, data.type));
          }
        }
      ]
    });
    await alert.present();
  }

  removeWorker(worker){
    let index = this.workers.indexOf(worker);
    if(index > -1){
      this.workers.splice(index, 1);
    }
  }
}
