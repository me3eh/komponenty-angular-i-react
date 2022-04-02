import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import Add from './Add';
import Delete from './Delete';

class ShowProduct2 extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <ol>
                <Add methodAdd={this.props.methodAdd.bind(this)} />  
                <Delete methodDelete={this.props.methodDelete.bind(this)} /> 
                {this.props.productArray.map((el, key) => (
                    <li>
                        <Link to={"/details/" + key}>{el}</Link>
                    </li>
                ))}
            </ol>
        )
    }
}
export default ShowProduct2;