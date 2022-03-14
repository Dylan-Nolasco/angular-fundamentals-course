import { Component, OnInit } from "@angular/core";
import { PassengerDashboardService } from "../../passenger-dashboard.service";
import { Passenger } from "../../models/passenger.interface";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
      <passenger-count [items]="passengers"> </passenger-count>
      <div *ngFor="let passenger of passengers">
        {{ passenger.fullname }}
      </div>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
        (view)="handleView($event)"
      >
      </passenger-detail>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor(
    private router: Router,
    private passengerService: PassengerDashboardService
  ) {
    //allow us to inject the dependency
  } //dependency injection

  ngOnInit(): void {
    this.passengerService.getPassengers().subscribe((data: Passenger[]) => {
      console.log(data);
      this.passengers = data;
    });
  }

  handleEdit(e: Passenger) {
    this.passengerService.updatePassengers(e).subscribe((data: Passenger) => {
      this.passengers = this.passengers.map((passenger: Passenger) => {
        if (passenger.id === e.id) {
          passenger = Object.assign({}, passenger, e);
        }
        return passenger;
      });
    });
  }

  handleRemove(e: Passenger) {
    this.passengerService.deletePassengers(e).subscribe((data: Passenger) => {
      this.passengers = this.passengers.filter((passenger: Passenger) => {
        return passenger.id !== e.id;
      });
    });
  }

  handleView(event: Passenger) {
    this.router.navigate(['/passengers/', event.id]);
  }
}
