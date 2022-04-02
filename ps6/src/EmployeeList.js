import React, { Component } from 'react';



class EmployeeList extends Component {
  constructor() {
    super();
    this.state = {
      edit: false,
      nrToEdit: -1,
      edited: null
    }
  }

  finishEdit(e) {
    this.setState({
      edit: false,
      nrToEdit: -1
    });
    this.props.updateEmployee(this.state.edited, this.state.nrToEdit);
  }
  editEmployee(id, e) {
    this.setState({
      edit: true,
      nrToEdit: id,
      edited: this.props.employees[id]
    });
  }

  changeVal(fieldKey, e) {
    let newVal = e.currentTarget.value;
    let empl = Object.assign({}, this.state.edited);
    if (fieldKey === 2) empl.employee_age = parseInt(newVal, 10);//only for age and salary
    if (fieldKey === 3) empl.employee_salary = parseInt(newVal, 10);//only for age and salary
    else {
      let i = 0;
      for (let propName in empl) {
        if (i === fieldKey) empl[propName] = newVal;
        i++;
      }
    }
    this.setState({
      edited: empl
    });
  }


  render() {

    if (this.props.employees.length > 0) {
      return (
        <ul>
          {this.props.employees.map((employee, index) => {
            if (index !== this.state.nrToEdit) return <li onClick={this.editEmployee.bind(this, index)} key={employee.id}>
              {employee.employee_name + ", age: " + employee.employee_age + ", salary: " + employee.employee_salary}</li>
            else return <li key={employee.id}>
              <form onSubmit={this.finishEdit.bind(this, this.state.edited)} >
                {Object.values(employee).map((field, fieldKey) => {
                    return <input key={fieldKey} defaultValue={field} onChange={this.changeVal.bind(this, fieldKey)} />
                }, this)}
                <input type="submit" value="Update" />
              </form></li>
          }
          )}
        </ul>
      );
    }



    return (
      <p>No results!</p>
    );

  }
}



export default EmployeeList;