import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketShowcaseComponent } from './pages/ticket-showcase/ticket-showcase.component';

const routes: Routes = [
  { path: 'ticket-showcase', component: TicketShowcaseComponent },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TicketShowcaseRoutingModule { }
