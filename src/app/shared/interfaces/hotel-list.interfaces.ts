export interface IHotel {
  fullName: string;
  id: string;
  label: string;
  location: {
    lat: number;
    lon: number;
  };
  locationName: string;
}

export interface IHotelResponse {
  results: {
    hotels: IHotel[];
  };
}
