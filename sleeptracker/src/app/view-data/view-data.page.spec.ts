import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewDataPage } from './view-data.page';

describe('ViewDataPage', () => {
  let component: ViewDataPage;
  let fixture: ComponentFixture<ViewDataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
