import { students } from "./student-data.js";
import { getPassed, getFailed, getAverage, getTopStudent, getSorted, getCourseSummary } from "./student-analytics.js";
const search = document.querySelector("#search")
const filter = document.querySelector("#filter")
const list = document.querySelector("#studentList")
const summary = document.querySelector("#summary")
const topStudent = document.querySelector("#topStudent")
function render(data) {
    list.innerHTML = data.map(s => `
        <tr>
            <td>${s.name}</td>
            <td>${s.course}</td>
            <td>${s.marks}</td>
            <td>${s.marks >= 50 ? "Passed" : "Failed"}</td>
        </tr>
    `).join("")
}
function updateStudents() {
    let result = students.filter(s =>s.name.toLowerCase().includes(search.value.toLowerCase()))
    if (filter.value === "passed") result = getPassed(result)
    if (filter.value === "failed") result = getFailed(result)
    render(getSorted(result))
}
const passed = getPassed(students)
const failed = getFailed(students)
const courses = getCourseSummary(students)
summary.innerHTML = `
    <h3>Analytics Summary</h3>
    <p>Total Students: ${students.length}</p>
    <p>Average Marks: ${getAverage(students).toFixed(2)}</p>
    <p>Passed: ${passed.length}</p>
    <p>Failed: ${failed.length}</p>
    <p>Course Summary: ${JSON.stringify(courses)}</p>
`
document.querySelector("#topBtn").addEventListener("click", () => {
    const top = getTopStudent(students)
    topStudent.innerHTML = `<h3>${top.name} - ${top.marks} Marks</h3>`
})
search.addEventListener("input", updateStudents)
filter.addEventListener("change", updateStudents)
render(getSorted(students))