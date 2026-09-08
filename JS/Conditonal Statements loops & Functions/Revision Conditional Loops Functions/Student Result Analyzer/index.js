const student = {
    name: "Tej",
    marks: {
        JavaScript: 85,
        React: 78,
        HTML: 90,
        CSS: 82
    }
}

function calculateTotal(marks) {
    let total = 0
    for (const subject in marks) {
        total += marks[subject]
    }
    return total
}
const totalMarks = calculateTotal(student.marks)
// console.log(totalMarks)

function calculateAverage(total,subjectCount){
    return total / subjectCount
}
const subjectCount = Object.keys(student.marks).length;
const averageMarks = calculateAverage(totalMarks,subjectCount)
// console.log(averageMarks)

function getGrade(average) {
    if (average >= 90) {
        return "A+"
    } else if (average >= 80) {
        return "A"
    } else if (average >= 70) {
        return "B"
    } else if (average >= 60) {
        return "C"
    } else if (average >= 50) {
        return "D"
    } else {
        return "F"
    }
}

function checkPass(marks) {
    for (const subject in marks) {
        if (marks[subject] < 40) {
            return false
        }
    }
    return true
}

const result = checkPass(student.marks) ? "PASS" : "FAIL"

const subjects = Object.keys(student.marks)
// for (const subject of subjects) {
//     console.log(subject)
// }

// for (const subject in student.marks) {
//     console.log(`${subject}: ${student.marks[subject]}`)
// }

function getGradeMessage(grade) {
    switch (grade) {
        case "A+":
            return "Outstanding"
        case "A":
            return "Excellent"
        case "B":
            return "Good"
        case "C":
            return "Average"
        case "D":
            return "Needs Improvement"
        default:
            return "Fail"
    }
}
const gradeMessage = getGradeMessage("A+")

function checkPass(marks,passingMark = 40){
    for (const subject in marks) {
        if (marks[subject] < passingMark) {
            return false
        }
    }
    return true
}
checkPass(student.marks)

function calculateMarksTotal(...marks) {
    let total = 0
    for (const mark of marks) {
        total += mark
    }
    return total
}
const total = calculateMarksTotal(85,78,90,82)
// console.log(total)

function processMarks(marks,callback){
    return callback(marks)
}
function findHighestMark(marks) {
    let highest = 0
    for (const subject in marks) {
        if (marks[subject] > highest) {
            highest = marks[subject]
        }
    }
    return highest
}
const highestMark = processMarks(student.marks,findHighestMark)

const markList = Object.values(student.marks)
function recursiveTotal(marks,index = 0){
    if (index === marks.length) {
        return 0
    }
    return ( marks[index] + recursiveTotal(marks,index + 1) )
}
// console.log(recursiveTotal(markList))

function showFirstSubjects(subjects) {
    let index = 0
    while (index < subjects.length &&index < 3){
        // console.log(subjects[index])
        index++
    }
}
showFirstSubjects(Object.keys(student.marks))

function showAtLeastOneSubject(subjects) {
    let index = 0
    do {
        // console.log(subjects[index])
        index++
    } while (index < subjects.length &&index < 1)
}

function generateResult(student) {
    const marks = student.marks
    const totalMarks = calculateTotal(marks)
    const subjectCount = Object.keys(marks).length
    const averageMarks = calculateAverage(totalMarks,subjectCount)
    const grade = getGrade(averageMarks)
    const result = checkPass(marks) ? "PASS" : "FAIL"
    const gradeMessage = getGradeMessage(grade)
    const highestMark = processMarks(marks,findHighestMark)
    console.log(`
Student: ${student.name}

Total Marks: ${totalMarks}
Average: ${averageMarks}
Highest Mark: ${highestMark}

Grade: ${grade}
Result: ${result}

Performance: ${gradeMessage}
`)
}
generateResult(student)
