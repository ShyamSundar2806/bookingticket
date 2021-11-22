import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { SeatbookComponent } from './seatbook/seatbook.component';
import { PassangerdetailsComponent } from './passangerdetails/passangerdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    SeatbookComponent,
    PassangerdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
