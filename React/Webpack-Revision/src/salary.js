const basicSalary = 50000;

const bonus = 10000;

const tax = 5000;

const allowance = 8000;

function getTotalSalary() {

    return basicSalary + bonus + allowance - tax;

}

export {

    basicSalary,

    bonus,

    allowance,

    tax,

    getTotalSalary

};