let browser = document.getElementById("browser");
let platform = document.getElementById("platform");
let url = document.getElementById("url");
let status = document.getElementById("status");
let employeeContainer = document.getElementById("employeeContainer");
let browserBtn = document.getElementById("browserBtn");
let urlBtn = document.getElementById("urlBtn");
let reloadBtn = document.getElementById("reloadBtn");
let backBtn = document.getElementById("backBtn");
let loadEmployees = document.getElementById("loadEmployees");
urlBtn.addEventListener(
    "click",
    function(){
        url.innerHTML =
        `<strong>Current URL:</strong>
        ${location.href}`;
    }
);
reloadBtn.addEventListener(
    "click",
    function(){
        location.reload();
    }
);
backBtn.addEventListener(
    "click",
    function(){
        history.back();
    }
);
loadEmployees.addEventListener(
    "click",
    loadEmployeeData
);
browserBtn.addEventListener("click", function(){
        browser.innerHTML =
        `<strong>Browser:</strong>
        ${navigator.userAgent}`;
        platform.innerHTML =
        `<strong>Platform:</strong>
        ${navigator.platform}`;
    }
);
function displayEmployees(employees){
employeeContainer.innerHTML="";
employees.forEach(function(employee){
let card=
document.createElement("div");
card.classList.add("card");
card.innerHTML=
`
<h3>
${employee.name}
</h3>
<p>
Email :
${employee.email}
</p>
<p>
Company :
${employee.company.name}
</p>
<p>
City :
${employee.address.city}
</p>
`
employeeContainer.appendChild(card);
});
}
async function loadEmployeeData(){
    try{
        loadEmployees.disabled = true;
        status.textContent = "Loading Employees...";
        let response = await fetch("https://jsonplaceholder.typicode.com/users"
        );
        if(!response.ok){
            throw new Error(
            "Unable to fetch employee data."
            );
        }
        let employees =
        await response.json();
        displayEmployees(employees);
        status.textContent = "Employees Loaded Successfully";
    }
    catch(error){
        console.log(error);
        alert(error.message);
        status.textContent = error.message;
    }
    finally{
        loadEmployees.disabled = false;
    }
}