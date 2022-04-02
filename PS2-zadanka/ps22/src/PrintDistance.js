import PropTypes from 'prop-types';
import React from 'react';
// const PrintDistance = params => {
    // return (computeDistanceBetweenPoints(stringToFloat(params.first_one_latitude), 
        // stringToFloat(params.second_one_latitude), 
        // stringToFloat(params.first_one_longitude),
        // stringToFloat(params.second_one_longitude)));
// };

class PrintDistance extends React.Component {
    render(){
        return (computeDistanceBetweenPoints(stringToFloat(this.props.first_one_latitude), 
        stringToFloat(this.props.second_one_latitude), 
        stringToFloat(this.props.first_one_longitude),
        stringToFloat(this.props.second_one_longitude)));
    }
}
PrintDistance.propTypes = {
    second_one_latitude: PropTypes.shape({
        degrees: PropTypes.number.isRequired,
        minutes: PropTypes.number.isRequired,
        seconds: PropTypes.number.isRequired,
        direction: PropTypes.oneOf(['S','N']).isRequired
    }),
    first_one_latitude: PropTypes.shape({
        degrees: PropTypes.number.isRequired,
        minutes: PropTypes.number.isRequired,
        seconds: PropTypes.number.isRequired,
        direction: PropTypes.oneOf(['S','N']).isRequired
    }),
    second_one_longitude: PropTypes.shape({
        degrees: PropTypes.number.isRequired,
        minutes: PropTypes.number.isRequired,
        seconds: PropTypes.number.isRequired,
        direction: PropTypes.oneOf(['E','W']).isRequired
    }),
    first_one_longitude: PropTypes.shape({
        degrees: PropTypes.number.isRequired,
        minutes: PropTypes.number.isRequired,
        seconds: PropTypes.number.isRequired,
        direction: PropTypes.oneOf(['W','E']).isRequired
    })
};
PrintDistance.defaultProps = {
    first_one_latitude: {
        degrees: 0,
        minutes: 0,
        seconds: 0,
        direction: "N"
    },
    first_one_longitude: {
        degrees: 0,
        minutes: 0,
        seconds: 0,
        direction: "E"
    },
    second_one_longitude: {
        degrees: 0,
        minutes: 0,
        seconds: 0,
        direction: "E"
    },
    second_one_latitude: {
        degrees: 0,
        minutes: 0,
        seconds: 0,
        direction: "N"
    }
}
function computeDistanceBetweenPoints(x1, x2, y1, y2){
    console.log(x1);
    console.log(x2);
    console.log(y1);
    console.log(y2);

    return (( Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(Math.cos( x1 * Math.PI / 180 )*(y2-y1), 2 ) ) * (40075.704 / 360))/1.609344).toFixed(2) + " sea miles";
}
function stringToFloat(number){
    console.log(number);
    return (number.degrees + number.minutes/60 + number.seconds/3600) *
    ( number.direction === "S" ? -1 : number.direction === "W" ? -1 : 1);
}
export default PrintDistance;