import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
hotelName='Neima Hotel';
numberOfRoom=10;
die=false;
constructor(){}

  ngOnInit(): void {
   
  }
  live(){
this.die=!this.die;
  }
}
