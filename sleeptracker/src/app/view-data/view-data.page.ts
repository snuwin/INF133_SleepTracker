import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonList, IonItem, IonLabel, IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.page.html',
  styleUrls: ['./view-data.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonList, IonItem, IonLabel, IonButton,
    CommonModule, FormsModule
  ]
})
export class ViewDataPage implements OnInit {
  overnightLogs: any[] = [];
  sleepinessLogs: any[] = [];

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.initStorage(); // ✅ Ensure storage is initialized first
    await this.loadData();
  }

  async initStorage() {
    await this.storage.create(); // ✅ Initialize Storage before using it
  }

  async loadData() {
    this.overnightLogs = (await this.storage.get('overnightLogs')) || [];
    this.sleepinessLogs = (await this.storage.get('sleepinessLogs')) || [];
  }

  async clearData() {
    await this.storage.clear();
    this.overnightLogs = [];
    this.sleepinessLogs = [];
    console.log('All logs cleared.');
  }
}
