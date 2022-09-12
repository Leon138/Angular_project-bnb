import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IHotel } from 'src/app/shared/interfaces/hotel-list.interfaces';
import { HotelService } from 'src/app/shared/services/get-hotel.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss'],
})
export class HouseComponent implements OnInit {
  public hotelList!: IHotel[];

  constructor(private router: Router, private getHotel: HotelService) {}

  ngOnInit(): void {
    this.getHotel.getHotelList().subscribe((hotelList) => {
      this.hotelList = hotelList;
      console.log(hotelList);
    });
  }

  public hotelInfo(id: string) {
    this.router.navigate(['hotelInfo', id]);
  }
}
