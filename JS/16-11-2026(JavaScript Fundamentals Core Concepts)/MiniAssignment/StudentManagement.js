/*
    STUDENT MANAGEMENT SYSTEM
    Concepts used:
    1. Variables and data types
    2. Arrays and objects
    3. Functions
    4. Conditional statements
    5. Array methods
    6. DOM manipulation
    7. Event handling
    8. Input validation
*/
// Store all student records in an array.
let Students = []
// Select HTML elements.
const StudentForm = document.getElementById("StudentForm")
const StudentTableBody = document.getElementById("StudentTableBody")
const StudentIdInput = document.getElementById("StudentId")
const StudentNameInput = document.getElementById("StudentName")
const JavaScriptMarksInput = document.getElementById("JavaScriptMarks")
const HTMLMarksInput = document.getElementById("HTMLMarks")
const CSSMarksInput = document.getElementById("CSSMarks")
const Message = document.getElementById("Message")
const EmptyMessage = document.getElementById("EmptyMessage")
const SearchStudentId = document.getElementById("SearchStudentId")
const SearchButton = document.getElementById("SearchButton")
const ShowAllButton = document.getElementById("ShowAllButton")
const SearchResult = document.getElementById("SearchResult")

// 1. Calculate total marks.
function CalculateTotal(JavaScript, HTML, CSS) {
    // Add marks from all three subjects.
    return JavaScript + HTML + CSS
}

// 2. Calculate percentage.
function CalculatePercentage(Total) {
    // Maximum marks = 300.
    return (Total / 300) * 100
}

// 3. Calculate grade based on percentage.
function CalculateGrade(Percentage) {
    if (Percentage >= 90) {
        return "A+"
    }
    else if (Percentage >= 80) {
        return "A"
    }
    else if (Percentage >= 70) {
        return "B"
    }
    else if (Percentage >= 60) {
        return "C"
    }
    else if (Percentage >= 40) {
        return "D"
    }
    else {
        return "Fail"
    }
}

// 4. Display success or error message.
function DisplayMessage(Text, Type) {
    Message.textContent = Text
    Message.className = Type
}

// 5. Clear registration form.
function ClearForm() {
    StudentForm.reset()
}

// 6. Register a student.
function RegisterStudent(Event) {
    // Prevent the browser from refreshing the page.
    Event.preventDefault()
    // Read input values.
    const StudentId = StudentIdInput.value.trim()
    const StudentName = StudentNameInput.value.trim()
    const JavaScriptMarks = Number(JavaScriptMarksInput.value)
    const HTMLMarks = Number(HTMLMarksInput.value)
    const CSSMarks = Number(CSSMarksInput.value)
    // Validate text inputs.
    if (!StudentId || !StudentName) {
        DisplayMessage("Please enter student ID and name.", "error")
        return
    }
    // Validate marks.
    const Marks = [JavaScriptMarks, HTMLMarks, CSSMarks]
    const InvalidMarks = Marks.some(function(Mark) {
        return !Number.isFinite(Mark) || Mark < 0 || Mark > 100
    })
    if (InvalidMarks) {
        DisplayMessage("Marks must be between 0 and 100.", "error")
        return
    }
    // Check whether the student ID already exists.
    const ExistingStudent = Students.find(function(Student) {
        return Student.StudentId.toLowerCase() === StudentId.toLowerCase()
    })
    if (ExistingStudent) {
        DisplayMessage("Student ID already exists.", "error")
        return
    }
    // Calculate total, percentage, and grade.
    const Total = CalculateTotal(
        JavaScriptMarks,
        HTMLMarks,
        CSSMarks
    )
    const Percentage = CalculatePercentage(Total);
    const Grade = CalculateGrade(Percentage);
    // Create a student object.
    const NewStudent = {
        StudentId: StudentId,
        StudentName: StudentName,
        JavaScriptMarks: JavaScriptMarks,
        HTMLMarks: HTMLMarks,
        CSSMarks: CSSMarks,
        Total: Total,
        Percentage: Percentage,
        Grade: Grade
    }
    // Add the new student object to the array.
    Students.push(NewStudent)
    // Update the student table.
    DisplayStudents(Students)
    // Show success message.
    DisplayMessage("Student registered successfully!", "success")
    // Clear the form.
    ClearForm()
}

// 7. Display student records in the HTML table.
function DisplayStudents(StudentList) {
    // Clear previous table content.
    StudentTableBody.innerHTML = ""
    // Check whether records are available.
    if (StudentList.length === 0) {
        EmptyMessage.style.display = "block"
        return
    }
    EmptyMessage.style.display = "none"
    // Loop through each student.
    StudentList.forEach(function(Student) {
        // Create a new table row.
        const Row = document.createElement("tr")
        // Insert student information.
        // textContent is used to safely display user-entered text.
        const Values = [
            Student.StudentId,
            Student.StudentName,
            Student.JavaScriptMarks,
            Student.HTMLMarks,
            Student.CSSMarks,
            Student.Total,
            Student.Percentage.toFixed(2) + "%",
            Student.Grade
        ]
        Values.forEach(function(Value) {
            const Cell = document.createElement("td")
            Cell.textContent = Value
            Row.appendChild(Cell)
        })
        // Create delete button cell.
        const ActionCell = document.createElement("td")
        const DeleteButton = document.createElement("button")
        DeleteButton.textContent = "Delete"
        DeleteButton.className = "delete-button"
        // Store student ID on the button.
        DeleteButton.dataset.studentId = Student.StudentId
        // Delete the selected student when clicked.
        DeleteButton.addEventListener("click", function() {
            DeleteStudent(Student.StudentId)
        })
        ActionCell.appendChild(DeleteButton)
        Row.appendChild(ActionCell)
        // Add row to table.
        StudentTableBody.appendChild(Row)
    })
}

// 8. Search student by ID.
function SearchStudent() {
    const SearchId = SearchStudentId.value.trim()
    SearchResult.textContent = ""
    if (!SearchId) {
        SearchResult.textContent = "Please enter a student ID."
        return
    }
    // Find the matching student.
    const FoundStudent = Students.find(function(Student) {
        return Student.StudentId.toLowerCase() === SearchId.toLowerCase()
    })
    // Display search result.
    if (FoundStudent) {
        SearchResult.textContent =
            "Student Found: " +
            FoundStudent.StudentName +
            " | Grade: " +
            FoundStudent.Grade +
            " | Percentage: " +
            FoundStudent.Percentage.toFixed(2) +
            "%"
        // Display only the matching student.
        DisplayStudents([FoundStudent])
    }
    else {
        SearchResult.textContent = "Student record not found."
        StudentTableBody.innerHTML = ""
        EmptyMessage.style.display = "block"
    }
}

// 9. Delete student record.
function DeleteStudent(StudentId) {
    // filter() creates a new array without the selected student.
    Students = Students.filter(function(Student) {
        return Student.StudentId !== StudentId
    })
    // Refresh the table.
    DisplayStudents(Students)
    // Show confirmation.
    SearchResult.textContent = ""
    DisplayMessage("Student record deleted successfully.", "success")
}

// 10. Display all student records.
function ShowAllStudents() {
    SearchStudentId.value = ""
    SearchResult.textContent = ""
    DisplayStudents(Students)
}
// Event listener for student registration.
StudentForm.addEventListener("submit", RegisterStudent)
// Event listener for student search.
SearchButton.addEventListener("click", SearchStudent)
// Event listener for displaying all records.
ShowAllButton.addEventListener("click", ShowAllStudents)
// Display the initial empty table.
DisplayStudents(Students)
