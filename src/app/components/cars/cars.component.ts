import { Component, OnInit } from '@angular/core';
import {cars} from "../../data/cars";
import {Car} from "../../models/Car";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[] = cars;
  constructor() { }

  ngOnInit(): void {
  }

}
