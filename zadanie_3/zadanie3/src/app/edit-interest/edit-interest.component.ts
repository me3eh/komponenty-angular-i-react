import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-edit-interest',
  templateUrl: './edit-interest.component.html',
  styleUrls: ['./edit-interest.component.css']
})
export class EditInterestComponent implements OnInit {
  @Input() selected:number;
  @Output() editValueInArray: EventEmitter<{ index:number, newValue:string }> = new EventEmitter();
  @Output() deleteInterestFromArray: EventEmitter<number> = new EventEmitter();
  @Output() blankSelection: EventEmitter<number> = new EventEmitter();
  @Input() valueInInput:string;

  constructor() { }

  ngOnInit(): void {
  }

  edit():void{
    this.editValueInArray.emit({ index: this.selected, newValue: this.valueInInput});
    this.blankSelect();
  }

  deleteFromArray(){
    this.deleteInterestFromArray.emit( this.selected );
    this.blankSelect();
  }

  blankSelect(){
    this.blankSelection.emit();
  }

}
