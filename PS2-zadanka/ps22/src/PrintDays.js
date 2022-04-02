import PropTypes from 'prop-types';
import React from 'react';
// const PrintDays = params => {
    // return (countDays(params.first_date, params.second_date));
// };
class PrintDays extends React.Component {
    render(){
        return countDays(this.props.first_date, this.props.second_date);
    }
}
PrintDays.defaultProps = {
    first_date: new Date("2021-06-02"),
    second_date: new Date("2021-06-03")
};
PrintDays.propTypes={
    first_date: PropTypes.instanceOf(Date).isRequired,
    second_date: PropTypes.instanceOf(Date).isRequired
}
function countDays(first_date, second_date){
    return (second_date.getTime() - first_date.getTime()) / (1000 * 60 * 60 * 24);
}
export default PrintDays;
