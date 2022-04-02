import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-manage-interest-list',
  templateUrl: './manage-interest-list.component.html',
  styleUrls: ['./manage-interest-list.component.css']
})
export class ManageInterestListComponent implements OnInit {

  @Input() interestList: string[];
  @Input() selected: number;
  @Output() selectInterestInParent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectInterest(index: number) {
    this.selectInterestInParent.emit(index);
  }


}
