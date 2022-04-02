import React from 'react';

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      el2delete: '',
    };
  }

  change(event) {
    this.setState({ el2delete: event.target.value });
  }

  callParentMethodD() {
    this.props.methodDelete(this.state.el2delete);
  }

  render() {
    return (
      <div>
        Delete product
        <br />
        <input
          type="text"
          placeholder="nazwa"
          value={this.state.el2delete}
          onChange={this.change.bind(this)}
        />
        <input
          type="button"
          onClick={this.callParentMethodD.bind(this)}
          value="Usuń produkt"
        />
      </div>
    );
  }
}

export default Delete;
