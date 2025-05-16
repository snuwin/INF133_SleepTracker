import { OvernightSleepData } from './overnight-sleep-data';

describe('OvernightSleepData', () => {
  it('should create an instance', () => {
    const now = new Date();
    const eightHoursLater = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    expect(new OvernightSleepData(now, eightHoursLater)).toBeTruthy();
  });
});
