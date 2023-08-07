import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Neima Hotel';
  numberOfRoom = 10;
  die = false;
  // creer une instance de l interface Room
  rooms: Room = {
    totalRooms: 20,
    avaibleRooms: 2,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];
  constructor() { }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Double Room',
        amenities: 'Air Conditioning',
        price: 2000,
        photos: 'assets/room1.png',
        checkinTime: new Date('2014-08-01'),
        checkoutTime: new Date('2014-09-02'),
        rating: 4.5
      },
      {
        roomNumber: 2,
        roomType: 'Single Room',
        amenities: 'Air Conditioning - Single Room',
        price: 1000,
        photos: 'assets/room1.png',
        checkinTime: new Date('2014-10-01'),
        checkoutTime: new Date('2015-11-02'),
        rating: 5.5
      },
      {
        roomNumber: 3,
        roomType: ' Deluxe Room',
        amenities: 'Air Conditioning - Free Wifi- Single Room',
        price: 6000,
        photos: 'assets/room1.png',
        checkinTime: new Date('2018-10-01'),
        checkoutTime: new Date('2019-11-02'),
        rating: 2.65555
      },
    ];
  }

  toggle() {
    this.die = !this.die;
  }
}
