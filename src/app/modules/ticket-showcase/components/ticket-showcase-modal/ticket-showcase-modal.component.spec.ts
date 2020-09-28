import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketShowcaseModalComponent } from './ticket-showcase-modal.component';

describe('TicketShowcaseModalComponent', () => {
  let component: TicketShowcaseModalComponent;
  let fixture: ComponentFixture<TicketShowcaseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketShowcaseModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketShowcaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
