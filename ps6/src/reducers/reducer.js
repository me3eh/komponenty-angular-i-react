export default function employees (state={employeeList:[], loaded:false }, action)  {
    let new_state;
      switch (action.type) {
        case 'SHOW_ALL':
          new_state=Object.assign({}, state);
          new_state.employeeList=action.employees.data;
          new_state.loaded=true;
        return new_state;
        case 'ADD_EMPLOYEE':
          console.log("add ",action.new_employee.data);
          return Object.assign({},state,{employeeList:[...state.employeeList,action.new_employee.data]});
        case "EDIT_EMPLOYEE":
          new_state = Object.assign({}, state);
          new_state.employeeList[action.id] =
            action.data;
          return new_state;
        
          
        default:
          return state
      }
    }
  
    
  
    