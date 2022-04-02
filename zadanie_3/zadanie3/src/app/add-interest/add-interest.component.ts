import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-add-interest',
  templateUrl: './add-interest.component.html',
  styleUrls: ['./add-interest.component.css']
})
export class AddInterestComponent implements OnInit {
  @Input() interestList: string[];
  @Output() pushInterestIntoArray: EventEmitter<string> = new EventEmitter();
  interest: string='';
  constructor() { }

  ngOnInit(): void {
  }
  pushInterest() {
    this.pushInterestIntoArray.emit(this.interest);
    this.interest = '';
  }
}
