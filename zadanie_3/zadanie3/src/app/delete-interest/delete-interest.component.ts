import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-delete-interest',
  templateUrl: './delete-interest.component.html',
  styleUrls: ['./delete-interest.component.css']
})
export class DeleteInterestComponent implements OnInit {
  @Output() deleteInterestFromArray: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  delete():void{
    this.deleteInterestFromArray.emit();
  }
}
