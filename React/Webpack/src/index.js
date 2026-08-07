import person from "./person.js";
import message from "./message.js";

import "./style.css";

import logo from "./logo.png";
const employee=new person("Surya",23)
const app = document.getElementById("app");

app.innerHTML = `

    <div class="container">

        <h1>

            Babel Mini Project

        </h1>

        <h2>

            ${message}

        </h2>

        <img

            src="${logo}"

            alt="Webpack Logo"

            class="logo"

        />
        <h2>${employee.getDetails()}</h2>

        <p>

            This project demonstrates Babel Transpilation using Webpack.

        </p>

    </div>

`;