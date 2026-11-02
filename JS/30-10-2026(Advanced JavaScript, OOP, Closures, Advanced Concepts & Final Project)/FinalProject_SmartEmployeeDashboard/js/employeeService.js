import Employee from "./Employee.js";

const STORAGE_KEY="smartEmployees";
const initialEmployees=[
    {id:101,name:"Rahul Sharma",email:"rahul@example.com",department:"Frontend",role:"React Developer",salary:45000,experience:2},
    {id:102,name:"Priya Reddy",email:"priya@example.com",department:"Backend",role:"Node.js Developer",salary:50000,experience:3},
    {id:103,name:"Arjun Kumar",email:"arjun@example.com",department:"Testing",role:"QA Engineer",salary:35000,experience:1},
    {id:104,name:"Sneha Rao",email:"sneha@example.com",department:"Design",role:"UI Developer",salary:40000,experience:2}
];

function loadEmployees(){
    try{
        const saved=localStorage.getItem(STORAGE_KEY);
        if(saved===null){
            localStorage.setItem(STORAGE_KEY,JSON.stringify(initialEmployees));
            return initialEmployees.map(data=>new Employee(data));
        }
        const data=JSON.parse(saved);
        if(!Array.isArray(data))throw new Error("Saved employee data must be an array.");
        return data.map(item=>new Employee(item));
    }catch(error){
        console.error("Could not load employee data:",error);
        return [];
    }
}

let employees=loadEmployees();

function createIdGenerator(start){
    let nextId=start;
    return ()=>nextId++;
}

const getNextId=createIdGenerator(
    Math.max(100,...employees.map(employee=>Number(employee.id)||0))+1
);

function save(){
    localStorage.setItem(STORAGE_KEY,JSON.stringify(employees));
}

function validateEmployee(data){
    if(!data||typeof data!=="object")return "Employee data is required.";
    if(!data.name?.trim())return "Name is required.";
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email||""))return "Enter a valid email.";
    if(!data.department)return "Select a department.";
    if(!data.role?.trim())return "Role is required.";
    if(data.salary===""||!Number.isFinite(Number(data.salary))||Number(data.salary)<0)return "Salary must be a non-negative number.";
    if(data.experience===""||!Number.isInteger(Number(data.experience))||Number(data.experience)<0||Number(data.experience)>60)return "Experience must be a whole number between 0 and 60.";
    const duplicate=employees.some(employee=>employee.email===data.email.trim().toLowerCase()&&employee.id!==Number(data.id));
    if(duplicate)return "This email is already registered.";
    return "";
}

export function getEmployees(){
    return employees.map(employee=>({...employee}));
}

export function createEmployee(data){
    const error=validateEmployee(data);
    if(error)throw new Error(error);
    const employee=new Employee({...data,id:getNextId()});
    employees=[...employees,employee];
    save();
    return employee;
}

export function updateEmployee(id,data){
    const error=validateEmployee({...data,id:Number(id)});
    if(error)throw new Error(error);
    const exists=employees.some(employee=>employee.id===Number(id));
    if(!exists)throw new Error("Employee not found.");
    employees=employees.map(employee=>employee.id===Number(id)?new Employee({...data,id:Number(id)}):employee);
    save();
}

export function deleteEmployee(id){
    const exists=employees.some(employee=>employee.id===Number(id));
    if(!exists)throw new Error("Employee not found.");
    employees=employees.filter(employee=>employee.id!==Number(id));
    save();
}

export function findEmployee(id){
    const employee=employees.find(item=>item.id===Number(id));
    return employee?new Employee(employee):null;
}