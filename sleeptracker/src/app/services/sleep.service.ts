import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Injectable({
  providedIn: 'root'
})

export class SleepService {
	private static LoadDefaultData:boolean = true;

	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

	private OVERNIGHT_KEY = 'overnightData';
	private SLEEPINESS_KEY = 'sleepinessData';

	private _storage: Storage | null = null; // references storage engine

	constructor(private storage: Storage) {
		this.init();
	}

	async init() {
		this._storage = await this.storage.create();

		await this.loadDataFromStorage();
		if (SleepService.LoadDefaultData) {
			this.addDefaultData();
			SleepService.LoadDefaultData = false;
	  
			// Save default data to storage so it persists
			await this.saveOvernightDataToStorage();
			await this.saveSleepinessDataToStorage();
		  }
	}

	private async loadDataFromStorage() {
		const overnightRaw = await this._storage?.get(this.OVERNIGHT_KEY);
    	const sleepinessRaw = await this._storage?.get(this.SLEEPINESS_KEY);
		
		// If found, parse each item back into the correct class (if needed)
		if (overnightRaw && overnightRaw.length > 0) {
			// For each item, create an OvernightSleepData object
			SleepService.AllOvernightData = overnightRaw.map((d: any) =>
				new OvernightSleepData(new Date(d.sleepStart), new Date(d.sleepEnd), d.notes)
			);
			// Add them to our AllSleepData as well
			SleepService.AllOvernightData.forEach(d => SleepService.AllSleepData.push(d));
		}
	  
		if (sleepinessRaw && sleepinessRaw.length > 0) {
			// For each item, create a StanfordSleepinessData object
			SleepService.AllSleepinessData = sleepinessRaw.map((d: any) =>
				new StanfordSleepinessData(d.loggedValue)
			);
			// Add them to our AllSleepData as well
			SleepService.AllSleepinessData.forEach(d => SleepService.AllSleepData.push(d));
		}
	}

	/**
   * Serialize & save overnight data to Ionic Storage.
   */
	private async saveOvernightDataToStorage() {
		if (!this._storage) return;
	
		// Convert each OvernightSleepData into a plain object
		const overnightArray = SleepService.AllOvernightData.map(d => {
			return {
				sleepStart: d.sleepStart.toString(),
				sleepEnd: d.sleepEnd.toString(),
				notes: d.notes
		  	};
		});
	
		await this._storage.set(this.OVERNIGHT_KEY, overnightArray);
	}
	
	private async saveSleepinessDataToStorage() {
		if (!this._storage) return;
	
		// Convert each StanfordSleepinessData into a plain object
		const sleepinessArray = SleepService.AllSleepinessData.map(d => {
			return {
				loggedValue: d.loggedValue
		  	};
		});
	
		await this._storage.set(this.SLEEPINESS_KEY, sleepinessArray);
	}

	public async logOvernightData(sleepData: OvernightSleepData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllOvernightData.push(sleepData);

		// Update storage
		await this.saveOvernightDataToStorage();
	}

	public async logSleepinessData(sleepData: StanfordSleepinessData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllSleepinessData.push(sleepData);

		// Update storage
		await this.saveSleepinessDataToStorage();
	}

	private addDefaultData() {
		var goToBed = new Date();
		goToBed.setDate(goToBed.getDate() - 1); //set to yesterday
		goToBed.setHours(1, 3, 0); //1:03am
		var wakeUp = new Date();
		wakeUp.setTime(goToBed.getTime() + 8 * 60 * 60 * 1000); //Sleep for exactly eight hours, waking up at 9:03am
		this.logOvernightData(new OvernightSleepData(goToBed, wakeUp)); // add that person was asleep 1am-9am yesterday
		var sleepinessDate = new Date();
		sleepinessDate.setDate(sleepinessDate.getDate() - 1); //set to yesterday
		sleepinessDate.setHours(14, 38, 0); //2:38pm
		this.logSleepinessData(new StanfordSleepinessData(4)); // add sleepiness at 2pm
		
		goToBed = new Date();
		goToBed.setDate(goToBed.getDate() - 1); //set to yesterday
		goToBed.setHours(23, 11, 0); //11:11pm
		wakeUp = new Date();
		wakeUp.setTime(goToBed.getTime() + 9 * 60 * 60 * 1000); //Sleep for exactly nine hours
		this.logOvernightData(new OvernightSleepData(goToBed, wakeUp));
	}
}
