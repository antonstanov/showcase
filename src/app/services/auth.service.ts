import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(): Observable<any> {
    return this.http.get('/api/widget/v1/settings', { observe: 'response' });
  }
}
