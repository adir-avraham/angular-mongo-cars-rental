import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CarsService {



  public getAllCarsUrl = 'http://localhost:4000/getAllCars';
  public getOneCarUrl = 'http://localhost:4000/getOneCar';
  public createEventUrl = "http://localhost:4000/createEvent";
  public events: Array<any>;

  constructor(private httpClient: HttpClient) { }

  

  getCars(): Observable<any> {
    return this.httpClient.get(this.getAllCarsUrl);
  }

  // getOneCar(car_id: any): Observable<any> {
  //   console.log(car_id)
  //   return this.httpClient.get(this.getOneCarUrl)
    
    
  // }

  getOneCar(car_id: any): Observable<any> {
    return this.httpClient.get(this.getAllCarsUrl).pipe(map((result: any) => {
      const { cars } = result
      
      const selectedCar = cars.filter(car => car._id === car_id) 
      //console.log("see here", selectedCar[0].events)
      //this.events = selectedCar;
      return selectedCar[0].events;
  }))
  }

  createEvent(newEvent: any): Observable<any> {
  
    return this.httpClient.post(this.createEventUrl, newEvent);
  }

}
