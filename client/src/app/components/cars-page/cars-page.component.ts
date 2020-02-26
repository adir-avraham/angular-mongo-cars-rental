import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars/cars.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {

  public cars: Array<any> = [];
  public myForm: any;
  public events: Array<any> = [];
  public typeForm: string;
  car_id_Form: String;

  constructor(private carsService: CarsService, private formBuilder: FormBuilder) { 

    this.myForm = this.formBuilder.group({
      car_id: null,
      startDate: null,
      endDate: null,
      price: null,
      KM: null,
      fixDescription: null,
      dateFix: null,
      type: null
    })

  }

  ngOnInit() {
  
    this.carsService.getCars().subscribe(result => {
    const { cars } = result;
    this.cars = cars;
    })
  
  
  }

  getOneCar() {
    const car_id = this.myForm.get('car_id').value
    this.car_id_Form = car_id;
    this.carsService.getOneCar(car_id).subscribe(result => {
      console.log(result)
      this.events = result;
    }, err => {
      console.log(err)
    })
 
  }

  displayForm() {
    this.typeForm = this.myForm.get('type').value
  }

  createEvent() {
    const newEvent = {
      car_id: this.myForm.get('car_id').value,
      startDate: this.myForm.get('startDate').value,
      endDate: this.myForm.get('endDate').value,
      price: this.myForm.get('price').value,
      KM: this.myForm.get('KM').value,
      fixDescription: this.myForm.get('fixDescription').value,
      dateFix: this.myForm.get('dateFix').value,
      type: this.myForm.get('type').value
    }
    if (!newEvent.car_id || newEvent.car_id < 0) return;
    this.carsService.createEvent(newEvent).subscribe(result => {
    //update the UI after adding new event
      const {events } = result.carAndEvents
    console.log(events)
    this.events = events

    }, err => {
      console.log(err)
    })  
    
    this.myForm.reset()
    this.myForm.patchValue({
      startDate: null,
      endDate: null,
      price: null,
      KM: null,
      fixDescription: null,
      dateFix: null,
      type: null
    })
  }

  // getOneCar() {
  //   const car_id = this.myForm.get('lp').value
  //   this.carsService.getOneCar(car_id)

  // }
}
