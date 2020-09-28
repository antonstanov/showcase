import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForTicketService {
  constructor(private http: HttpClient) {}

  getTicketsFromApi(): Observable<any> {
    return this.http.get(
      '/api/widget/v1/nearest_events_by_date?date=2020-08-01&date_interval=90'
    );
  }
}
