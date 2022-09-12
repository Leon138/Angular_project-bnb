import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
  SimpleChanges,
} from '@angular/core';
import {
  Browser,
  icon,
  LayerGroup,
  Map,
  map,
  marker,
  tileLayer,
} from 'leaflet';
import { IHotel } from 'src/app/shared/interfaces/hotel-list.interfaces';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit, OnInit {
  @Input() hotel: IHotel;

  public lefletMap: Map;

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    changes['hotel'].currentValue;
    if (changes['hotel'].currentValue && this.mapContainer) {
      this.lefletMap.setView(
        [this.hotel.location.lat, this.hotel.location.lon],
        16
      );
      //mark on map;
      let nameHotel = changes['hotel'].currentValue.label;

      const greenIcon =
        'https://leafletjs.com/examples/custom-icons/leaf-green.png';

      // const markerUrl =
      //   'https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon-2x.png';

      const Icon = icon({
        iconUrl: greenIcon,
        shadowUrl:
          'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
        iconSize: [50, 80], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
      });

      marker([this.hotel.location.lat, this.hotel.location.lon], { icon: Icon })
        .addTo(this.lefletMap)
        .bindPopup(nameHotel)
        .openPopup();
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.lefletMap = map(this.mapContainer.nativeElement);
    const isRetina = Browser.retina;
    const baseUrl =
      'https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}';

    const retinaUrl =
      'https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}';

    tileLayer(isRetina ? retinaUrl : baseUrl, {
      attribution:
        'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors',
      apiKey: '50e33b8aac0f4405a5f1b25372a68638',
      maxZoom: 20,
      id: 'osm-bright',
    } as any).addTo(this.lefletMap);
  }
}
