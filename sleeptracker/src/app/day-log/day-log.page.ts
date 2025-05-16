import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';

import {
  IonButton, 
  IonCard,
  IonContent,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonHeader,
  IonItem,
  IonTitle,
  IonLabel,
  IonSelect,
  IonToolbar,
  IonSelectOption
} from '@ionic/angular/standalone';

import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-day-log',
  templateUrl: './day-log.page.html',
  styleUrls: ['./day-log.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonCard,
    IonTitle,
    IonHeader,
    IonToolbar,
    IonCardHeader,
    IonContent,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    CommonModule, 
    FormsModule]
})

export class DayLogPage {
  sleepinessLevels = StanfordSleepinessData.ScaleValues.slice(1);
  selectedSleepiness: number | null = null;
  notes: string = '';
  showInfo: boolean = false;  

  constructor(private storage: Storage) {
    this.storage.create();
  }

  async logSleepiness() {
    if (this.selectedSleepiness !== null) {
      const sleepinessData = {
        level: this.selectedSleepiness,
        description: this.sleepinessLevels[this.selectedSleepiness],
        notes: this.notes,
        date: new Date().toISOString()
      };

      let logs = (await this.storage.get('sleepinessLogs')) || [];
      logs.push(sleepinessData);
      await this.storage.set('sleepinessLogs', logs);

      console.log("DEBUG] Logged Sleepiness:", sleepinessData);

      this.selectedSleepiness = null;
      this.notes = '';
    }
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;  
  }
}

