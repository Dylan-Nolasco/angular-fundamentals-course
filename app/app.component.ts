import { Component } from "@angular/core"; //decorated, specific metadata as a template, elements

@Component({
  selector: "app-root", //creates an html element
  styleUrls: ["app.component.scss"], //sass file
  template: `
    <div class="app">
      <!--<button (click)="handleClick(username.value)">Change name</button>
      <input
        type="text"
        [value]="name"
        (input)="handleChange($event.target.value)"
      />
      <!--<input type="text" #username/>!-->

      <!--<div *ngIf="name.length"> as the react conditional rendering
        searching for... {{ name }}
      </div>!-->
      <!--<template [ngIf]="name.length > 3"> the example above is sugar syntax from this one
        <div>Searching for... {{ name }}</div> the example below is sugar syntax from this one
      </template>!-->
      <div class="app">
      <passenger-viewer></passenger-viewer>
        <!--<h3>Airline Passengers</h3> 
        <ul>
          <template ngFor let-passenger let-i="index" [ngForOf]="passengers">
            <li>{{ i }} : {{ passenger.fullname }}</li>
          </template>
        </ul>!-->
        <!--<h3>Airline Passengers</h3>
        <ul>
          <li *ngFor="let passenger of passengers; let i = index">
            <span
              class="status"
              [class.checked-in]="passenger.checkedIn"
            ></span>
            {{ i }} : {{ passenger.fullname }}
            <p>{{ passenger | json }}</p>
            <div class="date">
              Check in date:
              {{
                passenger.checkingDate
                  ? (passenger.checkingDate | date: "y MMMM d" | uppercase)
                  : "Not checked in"
              }}
            </div>
            <div class="children">
              Children: {{ passenger.children?.length || 0 }}
            </div>
          </li>
        </ul>!-->
        <!--<h3>Airline Passengers</h3>
        <ul>
          <li *ngFor="let passenger of passengers; let i = index">
            <span
              class="status"
              [ngClass]="{
                'checked-in': passenger.checkedIn,
                'checked-out': !passenger.checkedIn
              }"
            ></span>
            {{ i }} : {{ passenger.fullname }}
          </li>
        </ul>
        <h3>Airline Passengers</h3>
        <ul>
          <li *ngFor="let passenger of passengers; let i = index">
            <span
              class="status"
              [style.backgroundColor]="(passenger.checkedIn ? 'green' : 'red')"
            ></span>
            {{ i }} : {{ passenger.fullname }}
          </li>
        </ul>
        <h3>Airline Passengers</h3>
        <ul>
          <li *ngFor="let passenger of passengers; let i = index">
            <span
              class="status"
              [ngStyle]=" { backgroundColor: (passenger.checkedIn ? 'green' : 'red') }"
            ></span>
            {{ i }} : {{ passenger.fullname }}
          </li>
        </ul>!-->
      </div>
    </div>
  `,
}) //Le hace saber a Angular que es un componente particular
export class AppComponent {
  //just a function
  // name: string = "";

  // handleChange(value: string) {
  //   this.name = value;
  // }

  // handleClick(value) {
  //   // this.name = 'Elías';
  //   console.log(value)
  // }
}
