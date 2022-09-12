import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './modules/dashboard/pages/dashboard-page/dashboard-page.component';
import { HouseComponent } from './modules/dashboard/components/house/house.component';
import { HotelInfoComponent } from './modules/dashboard/components/hotel-info/hotel-info.component';
import { HotelService } from './shared/services/get-hotel.service';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './modules/dashboard/components/map/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    HouseComponent,
    HotelInfoComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBK0OYwTZzMrG1H2J0C94AsQ6PnQ3_Nkvs',
    }),
  ],
  providers: [HotelService],
  bootstrap: [AppComponent],
})
export class AppModule {}
