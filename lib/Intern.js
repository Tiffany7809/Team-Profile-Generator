const Employee = require("./Employee");

//Intern Extends Employee
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email)
        this.school = school;
    }
    //getSchool gets school name
    getSchool(){
        return this.school
    }

    //getRole returns as Intern
    getRole(){
        return `Intern`;
    }
}


module.exports = Intern;


