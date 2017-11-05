import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBoxComponent } from './email-box.component';

describe('EmailBoxComponent', () => {
  let component: EmailBoxComponent;
  let fixture: ComponentFixture<EmailBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
