import employee from "./employee";

import department from "./department";

import {basicSalary,bonus,allowance,tax,getTotalSalary} from "./salary";

import company from "./company";

import { getExperience,getEmployeeStatus,getProjectName,getCompanyType } from "./utils";

import "./style.css";

import employeeImage from "./employee.jpg";

const app = document.getElementById("app");

app.innerHTML = `

<div class="container">

    <h1>

        Employee Dashboard

    </h1>

    <img
        src="${employeeImage}"
        alt="Employee"
        class="employee-image"
    >

    <h2>
        Employees : ${department.employees}
    </h2>

    <h2>

        Employee Name : ${employee.name}

    </h2>

    <h2>

        Department : ${department.name}

    </h2>

    <h2>

        Department ID : ${department.id}

    </h2>

    <h2>

        Manager : ${department.manager}

    </h2>

    <h2>

        Location : ${department.location}

    </h2>

    <h2>

        Basic Salary : ₹${basicSalary}

    </h2>

    <h2>

        Bonus : ₹${bonus}

    </h2>

    <h2>
        Allowance : ₹${allowance} 
    </h2>

    <h2>

        Tax : ₹${tax}

    </h2>

    <h2>

        Total Salary : ₹${getTotalSalary()}

    </h2>

    <h2>

        Company : ${company.name}

    </h2>

    <h2>

    Industry : ${company.industry}

    </h2>

    <h2>

        Location : ${company.location}

    </h2>

    <h2>

        Established : ${company.established}

    </h2>

    <h2>

        Employees : ${company.employees}

    </h2>

    <h2>

        Website : ${company.website}

    </h2>

    <h2>

        Experience : ${getExperience()} Years

    </h2>

    <h2>

        Status : ${getEmployeeStatus()}

    </h2>

    <h2>

        Project : ${getProjectName()}

    </h2>

    <h2>
        Company Type: ${getCompanyType()}
    </h2>

</div>

`;