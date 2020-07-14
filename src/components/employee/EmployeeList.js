import React, { useState, useEffect } from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
import EmployeeManager from '../../modules/EmployeeManager';

const EmployeeList = (props) => {
  // The initial state is an empty array
  // employees data setEmployees the function
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the setEmployees function to update state
    return EmployeeManager.getAllEmployees().then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };

  const deleteEmployee = id => {
    EmployeeManager.deleteSingleEmployee(id)
      .then(() => EmployeeManager.getAllEmployees()
        .then(setEmployees));
  };

  // got the employees from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  // Finally we use map() to "loop over" the employees array to show a list of employee cards
  return (
    <div className="container-cards">
      {/* add this button above your display of employee cards */}
      <>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => { props.history.push("/employees/new") }}>
          Hire Employee
        </button>
      </section>
      </>
      {employees.map(employee => <EmployeeCard key={employee.id}
        name={employee.name}
        employee={employee}
        {...props}
        // Pass function into Employee Card to delete Employee Object
        deleteEmployee={deleteEmployee} />)}
    </div>
  );
};
export default EmployeeList