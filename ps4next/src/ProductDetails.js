import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ProductDetails extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
        };
    }
    
    render(){
        return(
            <div>
                <p>
                    Name: {this.props.el}
                </p>
                    <Link to={"/details/" + this.props.index + "/edit"}>
                        <button>Change name of product</button>
                    </Link>
            </div>
        )
    }
    
}

export default ProductDetails;