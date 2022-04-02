import {FormGroup} from "@angular/forms";

export function itemNameRequiredIfQuantityExists({value, errors, controls}: FormGroup): {[key: string]: any} {
  // const [first, ...rest] = Object.keys(value || {});
  // const valid = rest.every(v => value[v] === value[first]);
  // return valid ? null : {equal: true};
  // console.log("error", errors);
  // errors={tru:"da"};
  // console.log("error", errors);
  // return {nn: "da"};
  if( value.quantity == null || value.quantity == '' ) {
    return null;
  }
  if( value.itemName == '' )
    return {needName: "If quantity exists, itemName also must exist"};
  return null;
}
