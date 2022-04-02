import axios from 'axios';
export const SHOW_ALL ='SHOW_ALL'
export const ADD_EMPLOYEE='ADD_EMPLOYEE'
export const EDIT_EMPLOYEE='EDIT_EMPLOYEE'


const getData=()=>{
    return axios('https://dummy.restapiexample.com/api/v1/employees')
    .then(res=>res.data).catch(error => console.error('Error:', error));
    
};

const addData=(new_employee)=>{
    return axios({url:'https://dummy.restapiexample.com/api/v1/create',
    method: 'POST',
        data: JSON.stringify(new_employee) 
    }).then(res=>res.data).catch(error => console.error('Error:', error));
};
const editData=(editing_employee, id)=>{
    return axios({url:'https://dummy.restapiexample.com/api/v1/update/' + id,
    method: 'PUT',
    data: JSON.stringify(editing_employee) 
    }).then(res=>res.data).catch(error => console.error('Error:', error));
};


export const showAll=()=>(dispatch)=>{
    getData().then(data => {
        dispatch(showAllAction(data));
      }).catch(error => {
        throw(error);
      });
    };
 

export const showAllAction=(data)=>(
{
    type: SHOW_ALL,
    employees:data
}
);

export const addEmployee=(new_employee)=> (dispatch)=> {
    const new_employee_2send={name: new_employee.data.employee_name, salary: new_employee.data.employee_salary, age: new_employee.data.employee_age};
    addData(new_employee_2send).then(data =>{
        console.log("data ",data.data);    
        if(data.data.name!== null) dispatch(addEmployeeAction(new_employee));
    }).catch(error => {
        throw(error);
    });
};
export const editEmployee=(edit_employee)=> (dispatch)=> {
    const edit_employee_2send={name: edit_employee.data.employee_name, salary: edit_employee.data.employee_salary, age: edit_employee.data.employee_age};
    editData(edit_employee_2send).then(data =>{
        console.log("data ",data.data);    
        if(data.data.name!== null) dispatch(editEmployeeAction(edit_employee));
    }).catch(error => {
        throw(error);
    });
};

export const addEmployeeAction=(new_employee)=> (
{ 
    type: ADD_EMPLOYEE, 
    new_employee 
}
);



export const editEmployeeAction=(updated_employee)=> (
    {
        type: EDIT_EMPLOYEE, 
        updated_employee 
    }
);