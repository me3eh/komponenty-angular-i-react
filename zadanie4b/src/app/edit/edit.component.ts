import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comments} from "../comments.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() comment: Comments;
  copyOfComment: Comments;
  @Output() editValueInArray: EventEmitter<Comments> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.copyOfComment = new Comments(this.comment.userId, this.comment.id, this.comment.title, this.comment.body);
  }
  save():void{
    this.editValueInArray.emit(this.copyOfComment);
  }
}
