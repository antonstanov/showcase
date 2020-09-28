import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketShowcaseComponent } from './pages/ticket-showcase/ticket-showcase.component';
import { TicketShowcaseRoutingModule } from './ticket-showcase-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../interceptors/auth-token.interceptor';
import { TicketShowcaseModalComponent } from './components/ticket-showcase-modal/ticket-showcase-modal.component';
import { TicketCurrentComponent } from './components/ticket-current/ticket-current.component';

@NgModule({
  declarations: [
    TicketShowcaseComponent,
    TicketShowcaseModalComponent,
    TicketCurrentComponent
  ],
  imports: [CommonModule, TicketShowcaseRoutingModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class TicketShowcaseModule {}
