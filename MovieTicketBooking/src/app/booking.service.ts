import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from './model/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  url:string;
  bookingArr : Booking[];
  booking : Booking;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:3004/bookings";
    this.booking =new Booking();
    this.bookingArr=[]; 
  }

  insertBooking(booking : Booking){
    this.http.post(this.url, booking).subscribe();
    return "Added Successfully!!";
  }
  deleteBooking (idField:number) 
  {
    this.http.delete<Booking>(this.url+"/"+idField).subscribe(); 
    return "Deleted Successfully!!";
    }
    updateBooking (booking:Booking) {
    this.http.put<Booking>(this.url+"/"+booking.id, booking).subscribe();
    return "Updated Successfully!!";
    }
    findBooking(idField:number)
    {
      this.http.get<Booking>(this.url+"/"+idField).subscribe(data=>this.booking=data);
      
      return this.booking;
    }
    findAllBooking()
    {
      this.http.get<Booking[]>(this.url).subscribe(data => this.bookingArr = data); 
      return this.bookingArr;
    }
}