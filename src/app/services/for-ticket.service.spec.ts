import { TestBed } from '@angular/core/testing';

import { ForTicketService } from './for-ticket.service';

describe('ForTicketService', () => {
  let service: ForTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
