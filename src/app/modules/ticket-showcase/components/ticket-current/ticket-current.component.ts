import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { TicketData } from '../../../../interfaces/ticket-data.interface';

@Component({
  selector: 'app-ticket-current',
  templateUrl: './ticket-current.component.html',
  styleUrls: ['./ticket-current.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketCurrentComponent implements OnInit {
  @Input() ticketData: TicketData;
  @Output() openTicketModal: EventEmitter<TicketData> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  openTicketModalHandler(): void {
    this.openTicketModal.emit(this.ticketData);
  }
}
