import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Car} from "../../models/Car";
import {cars} from "../../data/cars";

@Component({
  selector: 'app-full-car',
  templateUrl: './full-car.component.html',
  styleUrls: ['./full-car.component.css']
})
export class FullCarComponent implements OnInit {

  // fullCar: Car = cars;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => console.log(value));
  }
  ngOnInit(): void {
  }

}
