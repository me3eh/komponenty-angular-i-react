import React, {Component} from 'react';
import EmployeeList from './EmployeeList';

class App extends Component{
    
  componentDidMount(){
    console.log(this.props.employees,this.props); 
    this.props.showAll();
  }

  onSelected = (selected) => {
    this.setState({
      selected
    });
  }


  add(){
    let new_id=this.props.employees.employeeList.length+1;
    let employee2add={id:String(new_id), employee_name:"Jack Sparrow1", employee_salary: 2000000, employee_age:25};
    this.props.addEmployee(employee2add);  
  }
  
  edit(){
    let employee2edit={id:String(new_id), employee_name:"Jack Sparrow1", employee_salary: 2000000, employee_age:25};
    this.props.addEmployee(employee2add);  
  }

  render(){
    const {employees,editEmployee} =this.props;
    console.log("employees list",employees.employeeList);
  return (
    <div>{employees.loaded &&
      <EmployeeList updateEmployee={editEmployee} 
      employees={employees.employeeList} />}
    
    <button onClick={this.add.bind(this)}>Add</button>
    </div>
  );
  }
}

export default App;
