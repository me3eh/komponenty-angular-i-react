import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import ShowProduct from './ShowProduct';
import ShowProduct2 from './ShowProduct2';
import ProductDetails from './ProductDetails';
import Search from './Search';
import EditProduct from './EditProduct';

class Products extends React.Component{
    constructor(props){
        super(props);
        this.state={
            arrayWithProducts: ['milk', 'bread', 'eggs']
        };
    }
    addProduct(new_item){
        this.setState((prevState) =>({
            arrayWithProducts: [...prevState.arrayWithProducts, new_item],
        }));
    }
    deleteProduct(el){
        var array =[...this.state.arrayWithProducts];
        var index = array.indexOf(el);
        if (index !== -1){
            array.splice(index, 1);
            this.setState({arrayWithProducts: array});
        }
    }
    changeNameOfElement(whatIndex, valueToChange){
        var array =[...this.state.arrayWithProducts];
        array[whatIndex] = valueToChange;
        this.setState({arrayWithProducts: array});
    }
    searchProduct(keyword){
        var array =[...this.state.arrayWithProducts];
        const results = array.filter((obj) => {
            return obj.toLowerCase().startsWith(keyword.toLowerCase());
        });
        return results;
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Router>
                        <Link to="/">Home</Link>
                        
                        <Link to="/add_delete_product">Add or Delete Product</Link>
                        <Link to="/search">Search Products</Link>
                        <Route exact path="/" 
                            render={() => 
                            <ShowProduct productArray={this.state.arrayWithProducts} />}
                        />
                        <Route exact path="/add_delete_product" 
                            render={() => 
                            <ShowProduct2 productArray={this.state.arrayWithProducts}
                            methodAdd={this.addProduct.bind(this)}
                            methodDelete={this.deleteProduct.bind(this)} />}
                        />
                        <Route
                            exact path="/details/:id"
                            render={({ match }) =>
                            <ProductDetails 
                                index={match.params.id}
                                el={this.state.arrayWithProducts[match.params.id]}
                                methodForChange={this.changeNameOfElement.bind(this)} />
                            }
                        />
                        <Route
                            exact path="/search"
                            render={() =>
                            <Search 
                                methodForSearch={this.searchProduct.bind(this)}
                                array={this.state.arrayWithProducts} />
                            }
                        />
                        <Route exact path="/details/:id/edit"
                            render={({ match }) =>
                            <EditProduct
                                index={match.params.id}
                                el={this.state.arrayWithProducts[match.params.id]}
                                methodForChange={this.changeNameOfElement.bind(this)}
                            />
                            }
                        />
                    </Router>
                </header>
            </div>
        );
      }
}
export default Products;