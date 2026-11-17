// Named export: export a reusable employee object.
export const Employee = {
    EmployeeId: 101,
    EmployeeName: "Rahul",
    Department: "Frontend"
}
// Default export: one default value per module.
export default function DisplayEmployee(EmployeeData) {
    return `${EmployeeData.EmployeeName} works in ${EmployeeData.Department}.`
}