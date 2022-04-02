import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';

class ShowProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            arrayWithProducts: props.productArray
        };
    }
    render(){
        return (
            <ol>
                {this.state.arrayWithProducts.map((el, key) => (
                    <li>
                        <Link to={"/details/" + key}>{el}</Link>
                    </li>
                ))}
            </ol>
        )
    }
}
export default ShowProduct;