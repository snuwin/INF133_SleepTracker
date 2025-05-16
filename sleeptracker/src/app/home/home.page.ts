import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router

import { IonHeader,
	IonToolbar, 
	IonTitle,
    IonCard,        
    IonCardContent, 
	IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
		CommonModule,
		FormsModule,
		IonCard,        
		IonCardContent, 
		IonHeader, 
		IonToolbar, 
		IonTitle, 
		IonContent,
	],
})

export class HomePage {
	constructor(private router: Router, private ngZone: NgZone) {} 

	startTime: string = '';
	endTime: string = '';
	notes: string = '';
	
	goToLogOvernight() {
		this.ngZone.run(() => {
		  this.router.navigateByUrl('/log-overnight');
		});
	}
	
	navigateTo(path: string) {
		this.ngZone.run(() => {
		  this.router.navigateByUrl(path);
		});
	}
}
