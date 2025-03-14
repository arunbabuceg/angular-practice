import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaChatComponent } from './insta-chat.component';

describe('InstaChatComponent', () => {
  let component: InstaChatComponent;
  let fixture: ComponentFixture<InstaChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstaChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstaChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
