import {getEmployees,createEmployee,updateEmployee,deleteEmployee,findEmployee} from "./employeeService.js";

const $=selector=>document.querySelector(selector);
const form=$("#employeeForm");
const table=$("#employeeTable");
const search=$("#search");
const departmentFilter=$("#departmentFilter");
const sort=$("#sort");
const message=$("#message");
const cancelButton=$("#cancelButton");
const saveButton=$("#saveButton");
let editingId=null;
let searchTimer;

const money=value=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(value);

function showMessage(text,isError=false){
    message.textContent=text;
    message.classList.toggle("error",isError);
}

function debounce(callback,delay=300){
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer=setTimeout(()=>callback(...args),delay);
    };
}

function render(){
    let employees=getEmployees();
    const query=search.value.trim().toLowerCase();
    const department=departmentFilter.value;

    employees=employees.filter(employee=>{
        const matchesSearch=[employee.name,employee.email,employee.role,employee.department].some(value=>value.toLowerCase().includes(query));
        return matchesSearch&&(!department||employee.department===department);
    });

    if(sort.value==="salaryAsc")employees.sort((a,b)=>a.salary-b.salary);
    else if(sort.value==="salaryDesc")employees.sort((a,b)=>b.salary-a.salary);
    else if(sort.value==="experience")employees.sort((a,b)=>b.experience-a.experience);
    else employees.sort((a,b)=>a.name.localeCompare(b.name));

    table.replaceChildren();

    employees.forEach(employee=>{
        const row=document.createElement("tr");
        const values=[
            employee.id,
            employee.name,
            employee.department,
            employee.role,
            money(employee.salary),
            `${employee.experience} years`
        ];

        values.forEach(value=>{
            const cell=document.createElement("td");
            cell.textContent=value;
            row.append(cell);
        });

        const actions=document.createElement("td");
        const editButton=document.createElement("button");
        editButton.textContent="Edit";
        editButton.className="action edit";
        editButton.addEventListener("click",()=>editEmployee(employee.id));

        const deleteButton=document.createElement("button");
        deleteButton.textContent="Delete";
        deleteButton.className="action delete";
        deleteButton.addEventListener("click",()=>removeEmployee(employee.id));

        actions.append(editButton,deleteButton);
        row.append(actions);
        table.append(row);
    });

    $("#emptyMessage").classList.toggle("hidden",employees.length>0);
    updateStats();
}

function updateStats(){
    const employees=getEmployees();
    const departments=new Set(employees.map(employee=>employee.department));
    const payroll=employees.reduce((total,employee)=>total+employee.salary,0);
    $("#totalEmployees").textContent=employees.length;
    $("#employeeCount").textContent=`${employees.length} Employees`;
    $("#totalDepartments").textContent=departments.size;
    $("#totalPayroll").textContent=money(payroll);
}

function resetForm(){
    form.reset();
    editingId=null;
    $("#employeeId").value="";
    $("#formTitle").textContent="Add Employee";
    saveButton.textContent="Add Employee";
    cancelButton.classList.add("hidden");
}

function editEmployee(id){
    const employee=findEmployee(id);
    if(!employee)return showMessage("Employee not found.",true);

    editingId=employee.id;
    $("#employeeId").value=employee.id;
    $("#name").value=employee.name;
    $("#email").value=employee.email;
    $("#department").value=employee.department;
    $("#role").value=employee.role;
    $("#salary").value=employee.salary;
    $("#experience").value=employee.experience;
    $("#formTitle").textContent="Edit Employee";
    saveButton.textContent="Save Changes";
    cancelButton.classList.remove("hidden");
    form.scrollIntoView({behavior:"smooth",block:"start"});
}

function removeEmployee(id){
    if(!confirm("Are you sure you want to delete this employee?"))return;
    try{
        deleteEmployee(id);
        if(editingId===id)resetForm();
        showMessage("Employee deleted successfully.");
        render();
    }catch(error){
        showMessage(error.message,true);
    }
}

form.addEventListener("submit",event=>{
    event.preventDefault();
    const data={
        name:$("#name").value,
        email:$("#email").value,
        department:$("#department").value,
        role:$("#role").value,
        salary:$("#salary").value,
        experience:$("#experience").value
    };

    try{
        if(editingId!==null){
            updateEmployee(editingId,data);
            showMessage("Employee updated successfully.");
        }else{
            createEmployee(data);
            showMessage("Employee added successfully.");
        }
        resetForm();
        render();
    }catch(error){
        showMessage(error.message,true);
    }
});

cancelButton.addEventListener("click",resetForm);
search.addEventListener("input",debounce(render,300));
departmentFilter.addEventListener("change",render);
sort.addEventListener("change",render);

render();