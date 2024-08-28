import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApacheEChartsComponent } from './apache-e-charts.component';

describe('ApacheEChartsComponent', () => {
  let component: ApacheEChartsComponent;
  let fixture: ComponentFixture<ApacheEChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApacheEChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApacheEChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
