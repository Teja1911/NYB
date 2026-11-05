export const calculateAverage= marks=> marks.reduce((total,mark)=>total+mark,0)/marks.length
export const getPassedStudents=students=>students.filter(student=>student.marks>=50)
export const getStudentNames=students=>students.map(student=>student.name)