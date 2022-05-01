const fs = require("fs");

const Intern = require("./lib/Intern");

const Engineer = require("./lib/Engineer");

const Manager = require("./lib/Manager");

const inquirer = require("inquirer");

//waiting for new team members to be added to array
const team = [];
  

//promt questions to get employees information
function addTeamMember() {
  //function for manager input
  inquirer
  .prompt([
      {
          name: "manager",
          type: "input",
          message: "Who is the manager of the team?"
      },
      {
          name: "managerEmail",
          type: "input",
          message: "What is the managers e-mail?"
      },
      {
          name: "managerID",
          type: "input",
          message: "what is the managers ID?"
      },
      {
          name: "managerOfficeNum",
          type: "input",
          message: "What is the managers Office Number?"
      },
      {
        name: "teamRole",
        type: "list",
        message: "What is this employee's role on the team?",
        choices: [ "Manager"],
      }
  ])
  
  .then(function ({manager, managerID, managerEmail, managerOfficeNum}) {

      newManager = new Manager (manager, managerID, managerEmail, managerOfficeNum)

      team.push(newManager)
      addToHtml(newManager)
  })


  .then (function addEmployee(){
    inquirer
        .prompt([

      {
        name: "userName",
        type: "input",
        message: "Please enter the next employee's name:",
      },
      {
        name: "teamRole",
        type: "list",
        message: "What is this employee's role on the team?",
        choices: ["Engineer", "Intern", "Manager"],
      },
      {
        name: "email",
        type: "input",
        message: "Please enter this employee's email address:",
      },
      {
        name: "id",
        type: "input",
        message: "Please enter this employess's id:",
      },
    ])

    .then(function ({ userName, teamRole, id, email }) {
      var memberInfo = "";

      if (teamRole === "Manager") {
        memberInfo = "Office Number";
      } else if (teamRole === "Intern") {
        memberInfo = "school name";
      } else {
        memberInfo = "GitHub username";
      }

      inquirer
        .prompt([
          {
            type: "input",
            message: `please enter this employees's ${memberInfo}`,
            name: "memberInfo",
          },
          {
            name: "addToTeam",
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
            "yes", 
            "no"
          ],
          },
        ])
        
        .then(function ({ memberInfo, addToTeam }) {
          var employee;

          //if new member is a Manager...
          if (teamRole === "Manager") {
            employee = new Manager(userName, id, email, memberInfo);

            //if new member is an Intern...
          } else if (teamRole === "Intern") {
            employee = new Intern(userName, id, email, memberInfo);

            //if new member is an Engineer...
          } else {
            employee = new Engineer(userName, id, email, memberInfo);
          }

          // pushes last added team emember to the employees array
          team.push(employee);
          addToHtml(employee)


            //asking the user if they would like to add another team member
            .then(function () {
              if (addToTeam === "yes") {
                addEmployee();
              } else {
                Htmlclose();
              }
            });
        });
     });
    });
}

// function to generate the html file needed for web page
function Html() {
  const htmlTop = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" 
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet">
            
            <link rel = "stylesheet" href ="style.css">

            <title>Team Home Page</title>
        </head>

        <body>
            <div class="container-fluid" id = "banner"> My Team Profile</div>
                <div class="container">
                    <div class="row">`;

  // creating the page.html file for the team profile page
  fs.writeFile("./dist/page.html", htmlTop, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

function addToHtml(teamMember) {
  return new Promise(function (res, rej) {
    const email = teamMember.getEmail();
    const name = teamMember.getName();
    const id = teamMember.getId();
    const role = teamMember.getRole();

    var memberCard = "";

    //if employee entered is engineer, append this bootstrap card
    if (role === "Engineer") {
      const GitHub = teamMember.getGithub();
      memberCard = `<div class="col-6">
                    <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-header">${name}</h5>
                        <h6 class="card-title mb-2 text-muted">Engineer</h6>
                        <p class="card-text">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Employee ID: ${id}</li>
                                <li class="list-group-item"> 
                                   GitHub: <a href ="github.com/${GitHub}"target="_blank"> ${GitHub} </a>
                                </li>
                            </ul>
                        </p>
                        <a href="mailto:${email}" class="card-link">${email}</a>
                    </div>
                    </div>
                </div>`;

      //if employee entered is an intern, appened this bootstrap card
    } else if (role === "Intern") {
      const school = teamMember.getSchool();

      memberCard = `<div class="col-6">
                    <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-header">${name}</h5>
                        <h6 class="card-title mb-2 text-muted">Intern</h6>
                        <p class="card-text">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Employee ID: ${id}</li>
                                <li class="list-group-item">School: ${school}</li>
                            </ul>
                        </p>
                        <a href="mailto:${email}" class="card-link">${email}</a>
                    </div>
                    </div>
                </div>`;

      //if employee is a manager, appened this bootstrap card
    } else {
      const officePhone = teamMember.getOfficeNum();
      memberCard = `<div class="col-6">
                    <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-header">${name}</h5>
                        <h6 class="card-title mb-2 text-muted">Manager</h6>
                        <p class="card-text">
                            <ul class="list-group list-group-flush">

                                <li class="list-group-item">Office Phone: ${officePhone}</li>
                                <li class="list-group-item">Employeee ID: ${id}</li>

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
        return rej(err);
      }
      return res();
    });
  });
}

//funtion to create page with all employee information once entered
function TeamApp() {
  Html();
  addTeamMember();
}

//function to close out the html file once all employees have been added to page.
function Htmlclose() {
  const htmlEnd = `         </div> 
        </div>
    </body>
    </html>`;

  // appending the complete html file structure to the page.html file.
  fs.appendFile("./dist/page.html", htmlEnd, function (err) {
    if (err) {
      console.log(err);
    } else {
        console.log ("success!");
    }
  });

  console.log(
    "Thank you! Your Teams Profile Page has been created! Please open the 'page.html' file in your browser to view your profile page!"
  );
}

TeamApp();
