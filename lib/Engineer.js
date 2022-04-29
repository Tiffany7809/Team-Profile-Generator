const Employee = require("./Employee");

//Engineer Extends Employee
class Engineer extends Employee{
    constructor(github) {
        this.github = github;
    }

    //getGithub() -- gets github username
    getGithub(){/*add prompt for github*/}

    //getRole() returns as Engineer
    getRole(){
        return `Engineer`;
    }
}

module.exports = Engineer;






