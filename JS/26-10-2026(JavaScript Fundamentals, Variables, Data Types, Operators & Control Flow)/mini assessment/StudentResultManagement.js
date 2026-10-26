// StudentResultManagement.js

const students = [];
const subjectNames = ["English", "Maths", "Science", "Computer", "Social"];

const maximumSubjectMarks = 100;
const minimumPassMarks = 35;

let studentCount = Number(prompt("Enter the number of students:"));

if (!Number.isInteger(studentCount) || studentCount <= 0) {
    console.log("Please enter a valid positive number of students.");
} else {
    for (let studentIndex = 0; studentIndex < studentCount; studentIndex++) {
        const studentName = prompt(`Enter name of student ${studentIndex + 1}:`);
        const studentRollNumber = prompt("Enter roll number:");

        const marks = [];
        let validMarks = true;

        for (let subjectIndex = 0; subjectIndex < subjectNames.length; subjectIndex++) {
            const subjectMark = Number(
                prompt(`Enter ${subjectNames[subjectIndex]} marks (0-100):`)
            );

            if (
                !Number.isFinite(subjectMark) ||
                subjectMark < 0 ||
                subjectMark > maximumSubjectMarks
            ) {
                console.log("Invalid marks. Please restart and enter marks from 0 to 100.");
                validMarks = false;
                break;
            }

            marks.push(subjectMark);
        }

        if (!validMarks) {
            break;
        }

        let totalMarks = 0;

        for (let markIndex = 0; markIndex < marks.length; markIndex++) {
            totalMarks += marks[markIndex];
        }

        const percentage = totalMarks / subjectNames.length;

        let grade;

        if (percentage >= 90) {
            grade = "A+";
        } else if (percentage >= 80) {
            grade = "A";
        } else if (percentage >= 70) {
            grade = "B";
        } else if (percentage >= 60) {
            grade = "C";
        } else if (percentage >= 50) {
            grade = "D";
        } else if (percentage >= 35) {
            grade = "E";
        } else {
            grade = "F";
        }

        const isPassed = marks.every(
            (subjectMark) => subjectMark >= minimumPassMarks
        );

        const studentResult = {
            name: studentName,
            rollNumber: studentRollNumber,
            marks: marks,
            total: totalMarks,
            percentage: percentage,
            grade: isPassed ? grade : "F",
            status: isPassed ? "Pass" : "Fail"
        };

        students.push(studentResult);
    }

    console.log("\n===== STUDENT RESULT REPORT =====");

    for (let resultIndex = 0; resultIndex < students.length; resultIndex++) {
        const currentStudent = students[resultIndex];

        console.log("\nStudent:", currentStudent.name);
        console.log("Roll Number:", currentStudent.rollNumber);

        for (let markIndex = 0; markIndex < subjectNames.length; markIndex++) {
            console.log(
                subjectNames[markIndex] + ":",
                currentStudent.marks[markIndex]
            );
        }

        console.log("Total Marks:", currentStudent.total, "/", subjectNames.length * maximumSubjectMarks);
        console.log("Percentage:", currentStudent.percentage.toFixed(2) + "%");
        console.log("Grade:", currentStudent.grade);
        console.log("Result:", currentStudent.status);
    }
}