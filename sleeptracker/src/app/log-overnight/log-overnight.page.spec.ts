import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogOvernightPage } from './log-overnight.page';

describe('LogOvernightPage', () => {
  let component: LogOvernightPage;
  let fixture: ComponentFixture<LogOvernightPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LogOvernightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
