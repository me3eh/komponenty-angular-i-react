import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'date_time_pl'
})
export class PolishDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let datePl;
    let datePlForm = '';
    try {
      datePl = new DatePipe('pl').transform(value, 'medium');
    }
    catch(error){
      console.log(error);
      return value;
    }
    let dateTab;
    if(datePl != null) {
      dateTab = datePl.split(' ');
      switch (dateTab[1]) {
        case 'sty': dateTab[1] = 'stycznia'; break;
        case 'lut': dateTab[1] = 'lutego'; break;
        case 'mar': dateTab[1] = 'marca'; break;
        case 'kwi': dateTab[1] = 'kwietnia'; break;
        case 'maj': dateTab[1] = 'maja'; break;
        case 'cze': dateTab[1] = 'czerwca'; break;
        case 'lip': dateTab[1] = 'lipca'; break;
        case 'sie': dateTab[1] = 'sierpnia'; break;
        case 'wrz': dateTab[1] = 'września'; break;
        case 'paź': dateTab[1] = 'października'; break;
        case 'lis': dateTab[1] = 'listopada'; break;
        case 'gru': dateTab[1] = 'grudnia'; break;
      }
      dateTab.forEach((el, ind) => {
        if (ind === 2) { el += ' godzina'; }
        datePlForm += el + ' ';
      });
    }
    return datePlForm;
  }
}
