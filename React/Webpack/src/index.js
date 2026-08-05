import message from "./message.js";

import "./style.css";

import logo from "./logo.png";

const app = document.getElementById("app");

app.innerHTML = `

    <div class="container">

        <h1>

            Webpack Mini Project

        </h1>

        <h2>

            ${message}

        </h2>

        <img

            src="${logo}"

            alt="Webpack Logo"

            class="logo"

        />

        <p>

            This project demonstrates Webpack Module Bundling, Loaders, Plugins and Asset Management.

        </p>

    </div>

`;