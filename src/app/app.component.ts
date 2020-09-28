import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'showcase';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.login()
      .pipe(take(1))
      .subscribe(authData => {
        const token = authData.headers.get('x-auth-token');

        localStorage.setItem('x-auth-token', token);
      });
  }
}
