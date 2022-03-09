import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
    <passenger-count
    [items]="passengers"
    >
    </passenger-count>
    <passenger-detail
      *ngFor="let passenger of passengers;"
      [detail]="passenger"
    >
    </passenger-detail>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor() {}

  ngOnInit(): void {
    this.passengers = [
      {
        id: 1,
        fullname: "Morris",
        checkedIn: true,
        checkingDate: Date.now(),
        children: [
          { name: "kuka", age: 1 },
          { name: "cerdis", age: 10 },
        ],
      },
      {
        id: 2,
        fullname: "Mencus",
        checkedIn: false,
        checkingDate: null,
        children: null,
      },
      {
        id: 3,
        fullname: "Bonzo",
        checkedIn: true,
        checkingDate: 2323232323,
        children: [{ name: "loka", age: 4 }],
      },
      {
        id: 4,
        fullname: "Pipi",
        checkedIn: false,
        checkingDate: null,
        children: null,
      },
    ];
  }
}
