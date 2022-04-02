import { Component, OnInit } from '@angular/core';
import {IslandComponent} from "../island/island.component";

@Component({
  selector: 'app-islands',
  templateUrl: './islands.component.html',
  styleUrls: ['./islands.component.scss']
})
export class IslandsComponent implements OnInit {
  listOfIslands:IslandComponent[] = [];
  selected:number = -1;
  hideSave:boolean = false;
  constructor() {
  }

  ngOnInit(): void {
    this.listOfIslands.push(
      new IslandComponent("Kok'n'Bal", new Date(2021, (3 - 1), 21 ),
      new Date(2021, (4 - 1), 1 ), ["jajko", "piłki", "worek"], 5, false)
    );
    this.listOfIslands.push(
      new IslandComponent("Kok'n'Bal2", new Date(2021, ( 5 - 1 ), 21 ),
      new Date(2021, (6 - 1), 30 ), ["jajka", "piłeczki", "worek"], 22, true)
    );
    this.selected = -1;

  }
  select(i:number){
    this.selected = i;
    this.hideSave = false;
  }

  numberOfTribesDesc(i:number):string{
    let desc = "";
    let howLongNumber = i.toString().length;
    howLongNumber = Math.pow(10, howLongNumber );
    if( i == 1 )
      desc = "plemię";
    else if(
      i % 10 >= 2
      && i % 10 <= 4
      && i % ( howLongNumber / 10 ) != 12
      && i % ( howLongNumber / 10 ) != 13
      && i % ( howLongNumber / 10 ) != 14
    )
      desc = "plemiona";
    else
      desc = "plemion";
    return i + " " + desc;
  }

  save(){
    console.log(this.hideSave);
    this.hideSave = true;
    console.log(this.hideSave);
  }
}
