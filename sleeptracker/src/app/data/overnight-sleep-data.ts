import { SleepData } from './sleep-data';

export class OvernightSleepData extends SleepData {
	private _sleepStart:Date;
	private _sleepEnd:Date;
	private _notes: string;

	constructor(sleepStart:Date, sleepEnd:Date, notes: string = '') {
		super();
		this._sleepStart = sleepStart;
		this._sleepEnd = sleepEnd;
		this._notes = notes;
	}

	get sleepStart(): Date {
		return this._sleepStart;
	}
	
	get sleepEnd(): Date {
		return this._sleepEnd;
	}

	get notes(): string {
		return this._notes;
	}

	override summaryString():string {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		var difference_ms = sleepEnd_ms - sleepStart_ms;
		    
		return Math.floor(difference_ms / (1000*60*60)) + " hours, " + Math.floor(difference_ms / (1000*60) % 60) + " minutes.";
	}

	override dateString():string {
		return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}
}
