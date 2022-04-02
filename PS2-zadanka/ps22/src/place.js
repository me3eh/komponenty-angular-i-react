import React from 'react';
import PrintDistance from './PrintDistance';
import PrintDays from './PrintDays';
const place = notes => {
    return(
        <tr>
            <td>{notes.name}</td>
            <td>{beautifyCoords(notes.current.latitude)}</td>
            <td>{beautifyCoords(notes.current.longitude)}</td>
            <td>
                {additionalZeroIfSingleNumber(notes.current_date.getDate())}.
                {additionalZeroIfSingleNumber(notes.current_date.getMonth() + 1)}.
                {notes.current_date.getFullYear()}
            </td>
            <td><PrintDistance 
                first_one_latitude={notes.previous_one.latitude}
                first_one_longitude={notes.previous_one.longitude}
                second_one_latitude={notes.current.latitude}
                second_one_longitude={notes.current.longitude}/></td>
            <td>
                <PrintDays first_date={notes.previous_date}
                second_date={notes.current_date}/>
            </td>
        </tr>
    )
};
function beautifyCoords(number){
    return "" + number.degrees + String.fromCharCode(176) + " " +
    number.minutes + "' " + number.seconds + '"' + number.direction; 
};
function additionalZeroIfSingleNumber(date){
    return date.toString.length === 1 ? '0' + date : date;
};
export default place;