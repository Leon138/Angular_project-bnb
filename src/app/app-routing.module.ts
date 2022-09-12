import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelInfoComponent } from './modules/dashboard/components/hotel-info/hotel-info.component';
import { HouseComponent } from './modules/dashboard/components/house/house.component';

const routes: Routes = [
  { path: '', component: HouseComponent },
  { path: 'hotelInfo/:id', component: HotelInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
