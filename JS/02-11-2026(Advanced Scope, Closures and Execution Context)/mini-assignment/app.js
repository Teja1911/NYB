import { createCounter } from "./counter.js";
import { createSessionManager } from "./session-manager.js";

const counter = createCounter();
const session = createSessionManager();

const countDisplay = document.querySelector("#count");
const sessionStatus = document.querySelector("#sessionStatus");

function updateCounter(value) {
    countDisplay.textContent = value;
}

document.querySelector("#increment").addEventListener("click", () => {
    updateCounter(counter.increment());
});

document.querySelector("#decrement").addEventListener("click", () => {
    updateCounter(counter.decrement());
});

document.querySelector("#reset").addEventListener("click", () => {
    updateCounter(counter.reset());
});

document.querySelector("#login").addEventListener("click", () => {
    try {
        const usernameInput = document.querySelector("#username");

        if (!usernameInput) {
            throw new Error("Username input element not found in HTML.");
        }

        sessionStatus.textContent = session.login(usernameInput.value);
    } catch (error) {
        sessionStatus.textContent = error.message;
    }
});

document.querySelector("#logout").addEventListener("click", () => {
    sessionStatus.textContent = session.logout();
});