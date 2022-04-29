const Employee = require("./Employee");

//Engineer Extends Employee
class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    //getGithub() -- gets github username
    getGithub(){
        return this.github;
    }

    //getRole() returns as Engineer
    getRole(){
        return `Engineer`;
    }
}

module.exports = Engineer;






