import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      el2add: '',
    };
  }

  change(event) {
    this.setState({ el2add: event.target.value });
  }

  callParentMethod() {
    if(this.state.el2add)
        this.props.methodAdd(this.state.el2add);
    else
        alert("You cannot use empty strings as product")
  }

  render() {
    return (
      <div>
        New product
        <br/>
        <input
          type="text"
          placeholder="nazwa"
          value={this.state.el2add}
          onChange={this.change.bind(this)}
        />
        <input
          type="button"
          onClick={this.callParentMethod.bind(this)}
          value="Dodaj produkt"
        />
      </div>
    );
  }
}

export default Add;
