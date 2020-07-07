import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./employee.png")} alt="The employee" />
        </picture>
        <h3>
          Employee: <span className="card-employee">John</span>
        </h3>
      </div>
    </div>
  );
};

export default EmployeeCard;