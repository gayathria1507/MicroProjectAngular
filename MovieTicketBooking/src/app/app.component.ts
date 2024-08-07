import { Component } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from './model/booking';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  booking:Booking;
  result:string;
  flag:boolean;
  bookingArr:Booking[];

  constructor(private bookingService: BookingService){
    this.booking=new Booking();
    this.result="";
    this.bookingArr = [];
    this.flag=false;
  }
  insertBooking(data: any) 
  {
    this.booking.nameField = data.nameField;
    this.booking.movieField = data.movieField;
    this.booking.ticketsField = data.ticketsField;
    this.booking.seattypeField = data.seattypeField;
    //this.booking.paymentMethodField = data.paymentMethodField;
    this.booking.dateField = data.dateField;
    this.booking.showtimeField = data.showtimeField;
    this.booking.id = data.idField;

    this.result=this.bookingService.insertBooking(this.booking);
   
  }
  
  updateBooking(data: any) {
    this.booking.nameField = data.nameField;
    this.booking.movieField = data.movieField;
    this.booking.ticketsField = data.ticketsField;
    this.booking.seattypeField = data.seattypeField;
    //this.booking.paymentMethodField = data.paymentMethodField;
    this.booking.dateField = data.dateField;
    this.booking.showtimeField = data.showtimeField;
    this.booking.id = data.idField; 
  
    this.result=this.bookingService.updateBooking(this.booking);
   
  }
  
  deleteBooking (data:any) 
  {
    this.result=this.bookingService.deleteBooking(data.idField);
    
  }
  
  findBooking(data:any)
  {
    this.booking=this.bookingService.findBooking(data.idField);
    this.result=this.booking.id+"  "+this.booking.nameField+"  "+this.booking.dateField+"  "+this.booking.movieField;
  }

  findAllBooking(){
    this.bookingArr=this.bookingService.findAllBooking();
    this.flag=true;
  }
  }


