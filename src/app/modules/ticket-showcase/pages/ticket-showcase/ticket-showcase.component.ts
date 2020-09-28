import {Component, OnInit} from '@angular/core';
import {ForTicketService} from '../../../../services/for-ticket.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {TicketData} from '../../../../interfaces/ticket-data.interface';

@Component({
  selector: 'app-ticket-showcase',
  templateUrl: './ticket-showcase.component.html',
  styleUrls: ['./ticket-showcase.component.scss']
})
export class TicketShowcaseComponent implements OnInit {
  tickets$: Observable<TicketData>;
  ticketDataOpened: TicketData;
  currentTicketData: TicketData;

  constructor(private forTicketService: ForTicketService) {
  }

  ngOnInit(): void {
    this.tickets$ = this.forTicketService.getTicketsFromApi()
      .pipe(map(data => data[0].events.map(event => {
          event.poster.path = 'https://img5.goodfon.com/original/1920x1200/2/9b/frozen-red-fantasy-nature-blizzard-beautiful-anime-wood-wi-1.jpg';
          return event;
        }
      )));
  }

  openTicketModal(data: TicketData): void {
    this.ticketDataOpened = data;
  }

  currentTicket(data: TicketData): void {
    this.currentTicketData = data;
  }

  closeTicketModal(event): void {
    this.ticketDataOpened = null;
  }
}
