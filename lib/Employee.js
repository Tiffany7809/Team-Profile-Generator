//Adding Inquirer
const inquirer = require("inquirer");
const fs = require('fs')

//Employeee Parent Class 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    //getName gets user name
    getName() {
        return this.name
    }

    //getId gets user ID
    getId() { 
        return this.id
    }

    //getEmail gets user E-mail
    getEmail() {
        return this.email
    }

    //getRole returns as Employee
    getRole() {
        return `Employee`;
    }
}



module.exports = Employee;

// set up a HTML page that is generated with input information


