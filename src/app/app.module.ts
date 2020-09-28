import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {TicketShowcaseModule} from './modules/ticket-showcase/ticket-showcase.module';
import {AuthInterceptor} from './interceptors/auth-token.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TicketShowcaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
