const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//waiting for new team members to be added to array
const employees = [];


//promt questions to get all employees information
function addTeamMember() {
    inquirer.prompt([
    {
        type: "input",
        message: "Please enter your Team members name:",
        name: "userName"
    },
    {
        type: "list",
        name: "teamRole",
        message: "What is this member's role on the team?",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
    },
    {
        type:"input",
        message: "Please enter team member's id:",
        name: "id"
    },
    {
        type: "input",
        message: "Please enter team member's email address:",
        name: "email"
    }])
    .then(function({userName, teamRole, id, email}) {
        let roleInfo = "";
        if (teamRole === "Engineer") {
            roleInfo = "GitHub username";

        } else if (teamRole === "Intern") {
            roleInfo = "school name";
            
        } else {
            roleInfo = "office phone number";
        }
        inquirer.prompt([{
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "addToTeam"
        }])
        .then(function({roleInfo, addToTeam}) {
            let newMember;
            //if new member is an engineer...
            if (teamRole === "Engineer") {
                newMember = new Engineer(userName, id, email, roleInfo);

            //if new member is an Intern...
            } else if (teamRole === "Intern") {
                newMember = new Intern(userName, id, email, roleInfo);

            //if new member is a manager...
            } else {
                newMember = new Manager(userName, id, email, roleInfo);
            }
            // pushes last added team emember to the employees array 
            employees.push(newMember);
            addToHtml(newMember)

            //asking the user if they would liek to add another team member
            .then(function() {
                if (addToTeam === "yes") {
                    addTeamMember();
                } else {
                    Htmlclose();
                }
            });
            
        });
    });
}


// function to generate the html file needed for web page
function Html() {
    const htmlTop = 
    `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel = "stylesheet" href ="style.css">
            <title>Team Home Page</title>
        </head>
        <body>
        <div class="container-fluid" id = "banner"> My Team Profile</div>
            <div class="container">
                <div class="row">`;

    // creating the page.html file for the team profile page
    fs.writeFile("./dist/page.html", htmlTop, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

//funtion to create page with all employee information once entered
function TeamApp() {
    Html();
    addTeamMember();
}

function addToHtml(teamMember) {
    return new Promise(function(resolve, reject) {

        const email = teamMember.getEmail();
        const name = teamMember.getName();
        const id = teamMember.getId();
        const role = teamMember.getRole();
       

        let memberCard = "";

        //if employee entered is engineer, append this card
        if (role === "Engineer") {
            const gitHub = teamMember.getGithub();
            memberCard = 
                `<div class="col-6">
                    <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-header">${name}</h5>
                        <h6 class="card-title mb-2 text-muted">Engineer</h6>
                        <p class="card-text">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${id}</li>
                                <li class="list-group-item"> 
                                   GitHub: <a href ="github.com/${gitHub}"> ${gitHub} </a>
                                </li>
                            </ul>
                        </p>
                        <a href="mailto:${email}" class="card-link">${email}</a>
                    </div>
                    </div>
                </div>`;

        //if employee entered is an intern, appened this card
        } else if (role === "Intern") {
            const school = teamMember.getSchool();
           
            memberCard = 
                `<div class="col-6">
                    <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-header">${name}</h5>
                        <h6 class="card-title mb-2 text-muted">Intern</h6>
                        <p class="card-text">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${id}</li>
                                <li class="list-group-item">School: ${school}</li>
                            </ul>
                        </p>
                        <a href="mailto:${email}" class="card-link">${email}</a>
                    </div>
                    </div>
                </div>`;
        
        //if employee is a manager, appened this card
        } else {
            const officePhone = teamMember.getOfficeNum();
            memberCard = 
                `<div class="col-6">
                    <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-header">${name}</h5>
                        <h6 class="card-title mb-2 text-muted">Manager</h6>
                        <p class="card-text">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${id}</li>
                                <li class="list-group-item">Office Phone: ${officePhone}</li>
                            </ul>
                        </p>
                        <a href="mailto:${email}" class="card-link">${email}</a>
                    </div>
                    </div>
                </div>`;
        }
        console.log("Team Member has been added!");

        //appending the added employess to the html page
        fs.appendFile("./dist/page.html", memberCard, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });  
}

//function to close out the html file once all employees have been added to page.
function Htmlclose() {
    const htmlEnd = ` 
    </div> 
    </div>
    
    </body>
    </html>`;

    fs.appendFile("./dist/page.html", htmlEnd, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("Thank you! Your Teams Profile Page has been created!");
}

TeamApp();