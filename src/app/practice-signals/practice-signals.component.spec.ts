import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeSignalsComponent } from './practice-signals.component';

describe('PracticeSignalsComponent', () => {
  let component: PracticeSignalsComponent;
  let fixture: ComponentFixture<PracticeSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeSignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
