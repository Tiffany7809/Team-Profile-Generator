const Employee = require("./Employee");

//Intern Extends Employee
class Intern extends Employee {
    constructor (school) {
        this.school = school;
    }
    //getSchool gets school name
    getSchool(){/*add prompt for school name*/}

    //getRole returns as Intern
    getRole(){
        return `Intern`;
    }
}

Intern.getSchool();
Intern.getRole();

module.exports = Intern;


