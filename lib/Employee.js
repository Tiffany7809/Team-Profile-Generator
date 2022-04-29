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
    getName(employeeName) { /*add prompt for name*/
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Please enter your Name:',
                    name: 'employeeName',
                }
            ])

        .then(function (answers) { 
            const user = new Employee (`${answers.employeeName}`, `PLACE`,`Holder`)
            //send to file after creating new Employee object
            fs.appendFile('page.html',user, (err) => 
            err ? console.log(err): console.log (user))

        });

    }

    //getId gets user ID
    getId() {/*add prompt for ID */}

    //getEmail gets user E-mail
    getEmail() {/*add prompt for email */}

    //getRole returns as Employee
    getRole() {
        return `Employee`;
    }
}

getName();
getRole();
// Employee.getId();
// Employee.getEmail();

module.exports = Employee;

// set up a HTML page that is generated with input information


