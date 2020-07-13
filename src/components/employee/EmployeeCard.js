import React from "react";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./employee.png")} alt="The employee" />
        </picture>
        <h3>
          Employee: <span className="card-employee">{props.name}</span>
        </h3>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fire</button>
        <button type="button"
          onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;