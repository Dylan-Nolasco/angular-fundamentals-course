import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { PassengerDashboardService } from "../../passenger-dashboard.service";
import { Passenger } from "../../models/passenger.interface";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { switchMap } from "rxjs/operator/switchMap";

@Component({
  selector: "passenger-viewer",
  templateUrl: "./passenger-viewer.component.html",
  styleUrls: ["passenger-viewer.component.scss"],
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService
  ) {}
  ngOnInit() {
    this.route.params
      .switchMap((data: Passenger) => {
        return this.passengerService.getPassenger(data.id);
      })
      .subscribe((data: Passenger) => {
        this.passenger = data;
      });
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService
      .updatePassengers(event)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event);
      });
      // .subscribe(() => {
      //   this.passengerService.getPassenger(1).subscribe((data: Passenger) => {
      //     this.passenger = data;
      //   });
      // });
  }

  goBack() {
    this.router.navigate(['/passengers']);
  }
}
