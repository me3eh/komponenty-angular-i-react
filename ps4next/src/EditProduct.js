import React from 'react';
import { BrowserRouter as Redirect} from "react-router-dom";

class EditProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            el2: props.el,
            status: false
        }
    }

    change(event) {
        this.setState({ el2: event.target.value });
    }
    callParentMethod(event) {
        this.props.methodForChange(this.props.index, this.state.el2);
        this.setState({status: true});
    }
    render(){
        // if(this.state.status === true)
            // return <Redirect to="/" />
        return(
            <div>
                <h1>{this.props.el}</h1>
                <input
                    type="text"
                    placeholder="name"
                    value={this.state.el2}
                    onChange={this.change.bind(this)}
                />
                <input
                    type="button"
                    onClick={this.callParentMethod.bind(this)}
                    value="Change"
                />
            </div>
        );
    }
}
export default EditProduct;
