import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeTypescriptComponent } from './practice-typescript.component';

describe('PracticeTypescriptComponent', () => {
  let component: PracticeTypescriptComponent;
  let fixture: ComponentFixture<PracticeTypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeTypescriptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
