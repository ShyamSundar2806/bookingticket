import { Component, OnInit } from '@angular/core';
import { BookticketService } from '../bookticket.service';

@Component({
  selector: 'app-passangerdetails',
  templateUrl: './passangerdetails.component.html',
  styleUrls: ['./passangerdetails.component.css']
})
export class PassangerdetailsComponent implements OnInit {

  passname="";
  passage="";
  passno="";
  passseat="";
  passpayment=""
  passdate=""
  constructor(private service:BookticketService) {

    this.passname=this.service.passengerName;
    this.passage=this.service.PassengerAge;
    this.passno=this.service.PassengerMobile;
    this.passseat=this.service.Passenegerseatno;
    this.passpayment=this.service.Payment;
    this.passdate=this.service.date;

   }


  ngOnInit(): void {
  }

}
