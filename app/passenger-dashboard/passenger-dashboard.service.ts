import { Passenger } from "./models/passenger.interface";
import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

const PASSENGER_API: string = "/api/passengers";

@Injectable() //we can inject things into its constructor
export class PassengerDashboardService {
  constructor(private http: Http) {} //inject the http service

  getPassengers(): Observable<Passenger[]> {
    //explicar qué va a retornar
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json());
  }

  updatePassengers(passenger: Passenger): Observable<Passenger> {
    //explicar qué va a retornar
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger)
      .map((response: Response) => response.json());
  }

  deletePassengers(passenger: Passenger): Observable<Passenger> {
    //explicar qué va a retornar
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => response.json());
  }
}
