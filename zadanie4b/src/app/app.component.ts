import { Component } from '@angular/core';
import {Comments} from "./comments.service";
import {CommentsHttpService} from "./comments-http.service";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zadanie4b';
  listOfComments :Comments[] =[];
  selected : number = -1;

  constructor(private ordersService: CommentsHttpService) {
    ordersService.getComments().subscribe(comment => this.listOfComments = comment);
    console.log(this.listOfComments);
  }
  addOrder() {
    const order = new Comments(1, 1, 'lol', 'hihi');
    this.ordersService.editOrder(order, order.id).subscribe(ret => this.listOfComments[1] = ret);

  }
  select(which: number): void{
    this.selected = which;
  }
  editValueInArray(comment: Comments):void{
    this.ordersService.editOrder(comment, comment.id).subscribe(ret =>{
        this.listOfComments[comment.id-1] = ret;
        this.selected = -1;
      }
    );
  }
  // ngOnInit(){
  //   new AppComponent();
  // }
  save() {

    // this.ordersService.editOrder(comp, order.id).subscribe(ret => this.listOfComments[1] = ret);
  }
}
