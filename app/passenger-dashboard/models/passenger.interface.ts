export interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkingDate?: number, //number | null
  baggage: string
}