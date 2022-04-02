import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {
  name: string;
  surname: string;
  dateOfBirth: Date;
  interests: string[];
  selected: number;

  constructor() { }

  ngOnInit(): void {
    this.name = 'mAcIEJ';
    this.surname = 'bOCIUk';
    this.dateOfBirth = new Date('2000-08-18');
    this.interests = ['tennis', 'programming', 'photography'];
    this.selected = -1;
  }

  editValueInArray(values:{ index:number, newValue:string }):void{
    this.interests[values.index] = values.newValue;
  }

  select(which: number): void {
    this.selected = which;
  }
  blankSelection(){
    this.selected = -1;
  }
  pushIntoArray(interest: string):void{
    this.interests.push(interest);
  }

  deleteFromArray(index:number):void{
    if(index != -1)
      this.interests.splice(index, 1);
  }
}
