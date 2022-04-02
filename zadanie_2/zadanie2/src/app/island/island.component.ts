import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-island',
  templateUrl: './island.component.html',
  styleUrls: ['./island.component.scss']
})
export class IslandComponent implements OnInit {
  naming: string;
  dateOfArrival: Date;
  dateOfExiting: Date;
  uniqueItems: string[];
  numberOfTribes: number;
  safe: boolean;

  constructor( @Inject(String) naming:string, dateOfArrival:Date, dateOfExiting:Date,
               @Inject(String) uniqueItems:string[], @Inject(String) numberOfTribes:number,
               @Inject(String) safe:boolean) {
    this.naming = naming;
    this.dateOfArrival = dateOfArrival;
    this.dateOfExiting = dateOfExiting;
    this.uniqueItems = uniqueItems;
    this.numberOfTribes = numberOfTribes;
    this.safe = safe;
  }
  // constructor() { }

  ngOnInit(): void {
  }

}
