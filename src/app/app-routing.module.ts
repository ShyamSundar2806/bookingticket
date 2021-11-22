import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassangerdetailsComponent } from './passangerdetails/passangerdetails.component';
import { SeatbookComponent } from './seatbook/seatbook.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {
    path:'',
    component:TicketComponent,
  },
  {
    path:'ticket',
    children:[
      {
        path:'seatbook',
        component:SeatbookComponent
      }
    ]
  },
  {
    path:'passdetails',
    component:PassangerdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
