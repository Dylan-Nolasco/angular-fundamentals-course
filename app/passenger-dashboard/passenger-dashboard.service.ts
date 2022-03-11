import { Passenger } from "./models/passenger.interface";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch"; //observable error handling
import "rxjs/add/observable/throw"; //observable error handling

const PASSENGER_API: string = "/api/passengers";

@Injectable() //we can inject things into its constructor
export class PassengerDashboardService {
  constructor(private http: Http) {} //inject the http service

  getPassengers(): Observable<Passenger[]> {
    //explicar qué va a retornar
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json)); //observable error handling
  }

  getPassenger(id: number): Observable<Passenger> {
    //explicar qué va a retornar
    return this.http
      .get(`${PASSENGER_API}/${id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json)); //observable error handling
  }

  updatePassengers(passenger: Passenger): Observable<Passenger> {
    //explicar qué va a retornar
    let headers = new Headers({
      "Content-Type": "application/json",
    });
    let options = new RequestOptions({
      headers: headers,
    });

    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json));
  }

  deletePassengers(passenger: Passenger): Observable<Passenger> {
    //explicar qué va a retornar
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json));
  }
}
