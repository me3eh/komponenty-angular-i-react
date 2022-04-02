import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {getProductById} from "./api";

class ProductDetails extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            productName: ""
        };
    }
    componentDidMount(){
        getProductById(this.props.indexInDatabase).then(product =>{
            this.setState({productName: product.productName});
        })
    }

    render(){
        return(
            <div>
                <p>
                    Name: {this.state.productName}
                </p>
                    <Link to={"/details/" + this.props.index + "/edit"}>
                        <button>Change name of product</button>
                    </Link>
            </div>
        )
    }
    
}

export default ProductDetails;