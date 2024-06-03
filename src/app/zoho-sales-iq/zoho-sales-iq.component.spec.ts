import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZohoSalesIqComponent } from './zoho-sales-iq.component';

describe('ZohoSalesIqComponent', () => {
  let component: ZohoSalesIqComponent;
  let fixture: ComponentFixture<ZohoSalesIqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZohoSalesIqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZohoSalesIqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
