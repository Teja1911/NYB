import Employee from "./employee";

import department from "./department";

import company from "./company";

import { getSkills,getExperience,getPrimarySkills } from "./skills";

import "./style.css";

import employeeImage from "./employee.jpg";

const employee = new Employee(

    "Rahul Sharma",

    24,

    "Frontend Developer"

);

const app = document.getElementById("app");

app.innerHTML = `

<div class="container">

    <h1>

        Babel Revision Project

    </h1>

    <img

        src="${employeeImage}"

        alt="Employee"

        class="employee-image"

    >

    <h2>

        ${employee.getDetails()}

    </h2>

    <h2>

        Department : ${department("Frontend")}

    </h2>

    <h2>

        Company : ${company}

    </h2>

    <h2>

        Skills : ${getSkills().join(", ")}

    </h2>

    <h2>

        Primary Skills : ${getPrimarySkills()}

    </h2>

    <h2>
        Experience : ${getExperience()}
    </h2>

</div>

`;