import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
//presentational
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";
//containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";
//service (Is a provider information)
import { PassengerDashboardService } from "./passenger-dashboard.service";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerViewerComponent,
    PassengerFormComponent,
  ],
  imports: [CommonModule, HttpModule, FormsModule],
  exports: [PassengerViewerComponent],
  providers: [
    PassengerDashboardService, //DOM dependency injection
  ],
})
export class PassengerDashboardModule {}
