import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-detail",
  styleUrls: ["passenger-detail.component.scss"],
  template: `
    <div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name
        />
      </div>
      <div *ngIf="!editing">
        {{ detail.fullname }}
      </div>
      <div class="date">
        Check in date:
        {{
          detail.checkingDate
            ? (detail.checkingDate | date: "y MMMM d" | uppercase)
            : "Not checked in"
        }}
      </div>
      <button (click)="toggleEdit()">{{ editing ? "Done" : "Edit" }}</button>
      <button (click)="onRemove()">Remove</button>
      <button (click)="goToPassenger()">View</button>
    </div>
  `,
})
export class PassengerDetailComponent implements OnChanges, OnInit {
  @Input()
  detail: Passenger; //custom property

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>(); //custom property

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter<Passenger>(); //custom property

  @Output()
  view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  editing: boolean = false;

  constructor() {}

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    console.log("OnChanges");
  }

  ngOnInit() {
    console.log("OnInit");
  }

  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

  goToPassenger() {
    this.view.emit(this.detail);
  }
}
