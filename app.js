const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



let employeeID = 1;

//this is where we are going to push our filled out classes
teamArray = [];

//this is where are going to ask the questions that
//will fill out the 'Employee' class
function startQuestion() {
    inquirer.prompt(
        {
            type: "list",
            name: "role",
            message: "Is the employee an Intern, Engineer, or a Manager?",
            choices: [
                "Intern",
                "Engineer",
                "Manager",
                "Done"
            ]
        }).then(workerAnswer => {
            const { role } = workerAnswer;
            // console.log({ role });
    switch(role) {
        case 'Engineer':
            engineerQuestion();
        break;
        case 'Manager':
            managerQuestion();
        break;
        case 'Intern':
            internQuestion();
        break;

        default: buildTemplate();
        console.log('yeet- Parker')
    }   
    })};

    engineerQuestion = () => {
         inquirer.prompt([
            
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?"
            },
            {
                type: "input",
                name: "email",
                message: "What is their email address?"
            },
            {
                type: "input",
                message: "What is the Engineer's Github Username?",
                name: "github",
            }  
         ]).then(function(response) {
             let engineerName = response.name;
             let engineerEmail = response.email;
             let engineerGitHub = response.github;
             let engineer = new Engineer(
                engineerName,
                employeeID,
                engineerEmail,
                engineerGitHub
             );
            
             teamArray.push(engineer);
             employeeID++;
             startQuestion();

    });
}
    
    //const engineer = new Engineer(workerAnswer.name, workerAnswer.id, workerAnswer.email, workerAnswer.github)
    //teamMembers.push(newEngineer);
    managerQuestion = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?"
            },
            {
                type: "input",
                name: "email",
                message: "What is their email address?"
            },
            {
                type: "input",
                message: "What is the Manager's Office Number?",
                name: "officeNumber",
            },
        ]).then(function(response) {
            let managerName = response.name;
            let managerEmail = response.email;
            let managerOfficeNumber = response.officeNumber;
            let manager = new Manager(
               managerName,
               employeeID,
               managerEmail,
               managerOfficeNumber
            );
            
            teamArray.push(manager);
            employeeID++;
            startQuestion();


   })};
    //const manager = new Manager(workerAnswer.name, workerAnswer.id, workerAnswer.email, workerAnswer.officeNumber)
    //teamMembers.push(newManager);

    internQuestion = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?"
            },
            {
                type: "input",
                name: "email",
                message: "What is their email address?"
            },
            {
                type: "input",
                message: "What school is the Intern from?",
                name: "school",
            }

 

        ]).then(function(response) {
            let internName = response.name;
            let internEmail = response.email;
            let internSchool = response.school;
            let intern = new Intern(
               internName,
               employeeID,
               internEmail,
               internSchool
            );
            
            teamArray.push(intern);
            employeeID++;
            startQuestion();


   })
    }

    //const intern = new Inter(workerAnswer.name, workerAnswer.id, workerAnswer.email, workerAnswer.school)
    //teamMembers.push(newIntern);

    //code for writing  to the destinated html file
function buildTemplate () {
    fs.writeFile(outputPath, render(teamArray), function(err) {
        if (err) {
            return console.log(err);
        }
})};
     
  

     startQuestion();
//const manager = new Manager(workerAnswer.name, workerAnswer.id, workerAnswer.email, workerAnswer.officeNumber)
//const engineer = new Engineer()

