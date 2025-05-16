import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DayLogPage } from './day-log.page';

describe('DayLogPage', () => {
  let component: DayLogPage;
  let fixture: ComponentFixture<DayLogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DayLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
