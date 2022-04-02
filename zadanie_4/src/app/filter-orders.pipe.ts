import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './orders.service';
import {FormControl} from "@angular/forms";

@Pipe({
  name: 'filterOrders'
})
export class FilterOrdersPipe implements PipeTransform {

  transform(list: Order[],...args: string[]): any {
    const filterValue = args[0];
    console.log(args[1]);
    if (!filterValue) {
      return list;
    }
    const filteredList = list.filter(el => {
      switch (args[1]){
        case 'name':
            return el.name.toLowerCase().includes(filterValue.toLowerCase());
          break;
        case 'surname':
            return el.surname.toLowerCase().includes(filterValue.toLowerCase())
          break;
        case 'amount':
          if (Number.isNaN(Number(filterValue)))
            return null;
          return el.amount >= parseFloat(filterValue);
          break;
      }
    });
    return filteredList;
  }

}
