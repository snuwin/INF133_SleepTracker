import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, 
	IonToolbar, 
	IonTitle, 
	IonContent,
	IonCard,
	IonCardHeader,
  IonLabel,
  IonItem,
	IonCardTitle,
  IonDatetime,
	IonCardContent,
	IonButton,
	IonTextarea
} from '@ionic/angular/standalone';

import { OvernightSleepData } from '../data/overnight-sleep-data';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-log-overnight',
  templateUrl: './log-overnight.page.html',
  styleUrls: ['./log-overnight.page.scss'],
  standalone: true,
  imports: [IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonButton,
    IonDatetime,
    IonTextarea,
    CommonModule, 
    FormsModule]
})

export class LogOvernightPage {
  startTime: string = '';
  endTime: string = '';
  notes: string = '';

  constructor(private storage: Storage) {
    this.storage.create(); 
  }

  ionViewWillLeave() {
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement && typeof activeElement.blur === 'function') {
      activeElement.blur();
    }
  }

  onStartTimeChange(value: any) {
    this.startTime = value as string;
  }

  onEndTimeChange(value: any) {
    this.endTime = value as string;
  }

  async submit() {
    const sleepData = {
      startTime: this.startTime,
      endTime: this.endTime,
      notes: this.notes,
      date: new Date().toISOString()
    };

    let logs = (await this.storage.get('overnightLogs')) || [];
    logs.push(sleepData);
    await this.storage.set('overnightLogs', logs);

    console.log("DEBUG] Logged Overnight Sleep Data:", sleepData);

    this.startTime = '';
    this.endTime = '';
    this.notes = '';
  }
}
