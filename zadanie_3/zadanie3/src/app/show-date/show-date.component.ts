import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-date',
  templateUrl: './show-date.component.html',
  styleUrls: ['./show-date.component.css']
})
export class ShowDateComponent implements OnInit {
  @Input() dateOfBirth: Date;
  @Input() format: string;

  constructor() { }

  ngOnInit(): void {
  }

}
