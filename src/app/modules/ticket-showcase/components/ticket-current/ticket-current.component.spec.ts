import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCurrentComponent } from './ticket-current.component';

describe('TicketCurrentComponent', () => {
  let component: TicketCurrentComponent;
  let fixture: ComponentFixture<TicketCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketCurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
