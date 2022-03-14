import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-form",
  styleUrls: ["passenger-form.component.scss"],
  templateUrl: "passenger-form.component.html",
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;
  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkingDate = Date.now();
    }
  }

  handleSubmit(passenger: Passenger, isValid: boolean) {
    if(isValid) {
      this.update.emit(passenger);
    }
  }
}
