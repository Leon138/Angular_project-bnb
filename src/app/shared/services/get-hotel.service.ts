import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHotel, IHotelResponse } from '../interfaces/hotel-list.interfaces';
import { filter, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  public hotelList: IHotel[];

  constructor(private http: HttpClient) {}

  public getHotelList(): Observable<IHotel[]> {
    return this.http
      .get<IHotelResponse>(
        'http://engine.hotellook.com/api/v2/lookup.json?query=russia&lang=ru&lookFor=both&limit=10'
      )
      .pipe(map((response) => response.results.hotels));
  }

  public saveHotelList(hotelList: any) {
    this.hotelList = hotelList;
  }

  public getHotel(hotelId: string): Observable<IHotel> {
    return this.getHotelList().pipe(
      map((hotels) => hotels.find(({ id }) => id === hotelId))
    );
  }

  public getLocation(hotelLat: number, hotelLon: number): Observable<IHotel> {
    return this.getHotelList().pipe(
      map((hotels) =>
        hotels.find(
          ({ location }) =>
            location.lat === hotelLat && location.lon === hotelLon
        )
      )
    );
  }
}
