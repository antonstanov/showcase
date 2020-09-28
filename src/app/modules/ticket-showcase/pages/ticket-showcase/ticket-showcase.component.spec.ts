import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketShowcaseComponent } from './ticket-showcase.component';

describe('TicketShowcaseComponent', () => {
  let component: TicketShowcaseComponent;
  let fixture: ComponentFixture<TicketShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
