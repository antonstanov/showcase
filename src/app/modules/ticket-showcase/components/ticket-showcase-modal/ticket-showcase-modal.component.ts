import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TicketData } from '../../../../interfaces/ticket-data.interface';

@Component({
  selector: 'app-ticket-showcase-modal',
  templateUrl: './ticket-showcase-modal.component.html',
  styleUrls: ['./ticket-showcase-modal.component.scss']
})
export class TicketShowcaseModalComponent implements OnInit {
  @Input() ticketData: TicketData;
  @Output() ticketClose: EventEmitter<TicketData> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ticketCloseHandler(): void {
    this.ticketClose.emit();
  }
}
