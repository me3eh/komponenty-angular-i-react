import React from 'react';
import Add from './Add';
import Delete from './Delete';
import './App.css';
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
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <Add methodAdd={this.addProduct.bind(this)} />
                        <Delete methodDelete={this.deleteProduct.bind(this)} />
                        <ol>
                            {this.state.arrayWithProducts.map((el) => (
                                <li>{el}</li>
                            ))}
                        </ol>
                    </div>
                </header>
            </div>
        );
      }
}
export default Products;