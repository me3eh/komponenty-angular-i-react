import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {
  name: string="";
  surname: string="";
  dateOfBirth:Date= new Date();
  interests: string[]=[];
  selected: number = -1;
  constructor() { }

  ngOnInit(): void{
    this.name = 'Joanna';
    this.surname = 'Krupa';
    this.dateOfBirth = new Date('2000-03-18');
    this.interests = ['tennis', 'programming', 'photography'];
    this.selected = -1;
  }
  select(which: number): void{
    this.selected = which;
  }

  save() {

  }
}
