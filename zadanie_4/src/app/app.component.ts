import { Component, OnInit } from '@angular/core';
import { OrdersService, Order } from './orders.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormGroupDirective,
  AbstractControl
} from '@angular/forms';
import {itemNameRequiredIfQuantityExists} from "./itemNameRequiredIfQuantityExists";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-reactive-forms';
  orders: Order[];
  formModel: FormGroup;
  showForm = false;
  items: FormArray;
  customerFilter: FormControl = new FormControl();
  radioButtons: FormControl = new FormControl('name');
  filterValue: string;
  constructor(private ordersService: OrdersService) {
    this.orders = ordersService.getOrders();
    console.log(this.orders);
    this.customerFilter.valueChanges.subscribe({
      next: val => { this.filterValue = val; },
      error: error => console.error(error)
    });
  }

  ngOnInit(): void {
    this.formModel = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      itemsArray: new FormArray([
        new FormGroup({
          itemName: new FormControl(''),
          quantity: new FormControl('', Validators.min(1))
        }, itemNameRequiredIfQuantityExists)
      ])
    });
    this.items = this.formModel.get('itemsArray') as FormArray;
  }

  addOrder(): void {
    console.log('add order');
    const itemsArrayValues = Array<[string, number]>();
    // tslint:disable-next-line:forin
    for(let i = 0; i <this.items.length; i++) {
      if(!this.items.at(i).value.quantity)
        this.items.at(i).value.quantity = 1;
      console.log(this.items.at(i).value.quantity);
      itemsArrayValues.push([this.items.at(i).value.itemName, this.items.at(i).value.quantity]);
    }
    const order = new Order(this.formModel.value.name, this.formModel.value.surname, itemsArrayValues, Math.random() * 100);
    this.orders.push(order);
    this.showForm = false;
  }

  moreItems(): void {

    this.items.push(new FormGroup({
      itemName: new FormControl(''),
      quantity: new FormControl('', Validators.min(1))
    },itemNameRequiredIfQuantityExists));
  }
  check(f:AbstractControl[]){
    return f.every( e=> { return e.errors != null } );
    // console.log( error );
  }


}
