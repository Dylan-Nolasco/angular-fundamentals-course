import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
//containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
//presentational
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [CommonModule],
  exports: [
    PassengerDashboardComponent
  ]
})
export class PassengerDashboardModule {}
