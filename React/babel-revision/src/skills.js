const frontendSkills = [

    "HTML",

    "CSS",

    "JavaScript"

];

const additionalSkills = [

    "React",

    "Webpack",

    "Babel"

];

const backendSkills = [

    "Node.js",

    "Express",

    "MongoDB"

];

// Spread Operator
const allSkills = [

    ...frontendSkills,

    ...additionalSkills,

    ...backendSkills

];

// Destructuring
const [firstSkill, secondSkill] = allSkills;

// Arrow Function
const getSkills = () => allSkills;

// Arrow Function
const getExperience = () => "2 Years";

// Arrow Function
const getPrimarySkills = () => {

    return `${firstSkill}, ${secondSkill}`;

};

// Named Export
export {

    getSkills,

    getExperience,

    getPrimarySkills

};