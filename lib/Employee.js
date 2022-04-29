//Adding Inquirer
const inquirer = require("inquirer");

//Employeee Parent Class 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //getName gets user name
    getName() { /*add prompt for name*/}

    //getId gets user ID
    getId() {/*add prompt for ID */}

    //getEmail gets user E-mail
    getEmail() {/*add prompt for email */}

    //getRole returns as Employee
    getRole() {
        return `Employee`;
    }
}

Employee.getName();
Employee.getId();
Employee.getEmail();

module.exports = Employee;

// set up a HTML page that is generated with input information


