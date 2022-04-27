//This will hold the code for the Team as a whole

//Adding Inquirer
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Who is the Manager of this Team?',
      name: 'Manager',
    },
    {
      type: 'input',
      message: 'Please enter the Managers e-mail.',
      name: 'E-mail',
    },
    {
      type: 'list',
      message: 'Would you like to add more to the Team?',
      name: 'continue?',
      choices: ['Intern', 'Engineer', 'Manager', 'No Im Done'],
    },
  ])
  .then(function (answers) {
      console.log(answers)
  }
  
     
  );




// set up a HTML page that is generated with input information
const TeamPage = ``

