import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, retry } from 'rxjs';
import { IHotel } from 'src/app/shared/interfaces/hotel-list.interfaces';
import { HotelService } from 'src/app/shared/services/get-hotel.service';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.scss'],
})
export class HotelInfoComponent implements OnInit {
  public hotel: IHotel;

  constructor(private route: ActivatedRoute, private getHotel: HotelService) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log('id:', id);

    this.getHotel.getHotel(id).subscribe((hotel) => {
      this.hotel = hotel;
      // console.log(this.hotel);
    });

    // this.getHotel.getHotel(id).subscribe(() => console.log(this.hotel));
  }
}
