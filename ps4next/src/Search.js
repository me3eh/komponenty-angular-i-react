import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            el: "",
            filteredArray: props.array
        }
    }
    callParentMethod(event){
        this.setState({el: event.target.value});
    }
    submit(){
        let array = this.props.methodForSearch(this.state.el);
        this.setState({filteredArray: array});
    }
    clear(){
        this.setState({filteredArray: this.props.array});
        this.setState({el: ""})
    }
    render(){
        return(
            <div>
                <input
                    type="text"
                    placeholder="name"
                    value={this.state.el}
                    onChange={this.callParentMethod.bind(this)}
                />
                <input
                    type="button"
                    onClick={this.submit.bind(this)}
                    value="Search"
                />
                <input
                    type="button"
                    onClick={this.clear.bind(this)}
                    value="Clear"
                />
                {this.state.filteredArray.map((el, key) => (
                    <li>
                        <Link to={"/details/" + key}>{el}</Link>
                    </li>
                ))}
            </div>
        )
    }
}
export default Search;