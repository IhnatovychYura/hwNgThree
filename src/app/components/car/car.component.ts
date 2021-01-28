import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../models/Car";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  singleCar: Car;

  constructor() { }

  ngOnInit(): void {
  }

}
