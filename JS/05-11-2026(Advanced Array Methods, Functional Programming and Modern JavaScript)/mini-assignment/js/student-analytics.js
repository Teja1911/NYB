export const getPassed=students=>students.filter(s=>s.marks>=50)
export const getFailed=students=>students.filter(s=>s.marks<50)
export const getAverage=students=>students.reduce((sum,s)=>sum+s.marks,0)/students.length
export const getTopStudent=students=>students.reduce((top,s)=>s.marks>top.marks?s:top)
export const getSorted=students=>[...students].sort((a,b)=>b.marks-a.marks)
export const getCourseSummary=students =>
    students.reduce((result, s) => {
        result[s.course] = (result[s.course] || 0) + 1
        return result
    }, {})