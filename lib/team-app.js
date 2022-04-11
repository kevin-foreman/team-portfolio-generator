// Need all the dependencies here
const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const fs = require('fs');

function Team () {
    this.Employee;
    this.Manager;
    this.Engineer;
    this.Intern;
}

// Set up empty arrays to hold data
const employees = [];
const manager = [];
const engineers = [];
const interns = [];


// question prompts (format from inquirer)
// function to start the Team builder and prompt user for team members

Team.prototype.buildTeam = function() {
// Another way this could work is const promptUser = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the team manager's name? (required)`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter the team manager's name.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id-number',
            message: `Please enter the team manager's ID number (required)`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the ID number');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'manager-email',
            message: `Please enter the team manager's email address (required)`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office-number',
            message: `Please enter the team manager's office number`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a phone number');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'employee-selection',
            message: 'Which type of employee would you like to add to your team?',
            choices: ['Engineer', 'Intern']
        }
    
      
        ])
            // const newEmployee = () => {
            .then switch (newEmployee) {
            case "Engineer":
                inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'id-number',
                        message: 'Enter Engineer employee ID number.'
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: 'Enter the Engineer Github username.'
                    }
                ])
                .then(function() {
                    newEmployee.push()
                });
                break;
                case "Intern":
                    inquirer
                    .prompt([
                    {
                        type: 'input',
                        name: 'id-number',
                        message: 'Enter the intern school.'
                    }    
                    ]).then(function() {
                        newEmployee.push()
                    });
                break;
            }
        }
    
        
        // .then(function() {
        // })
    


    // .then(teamData => {
    //     teamData.push(teamData);
    //     if (teamData.confirmAddEmployee) {
    //         return promptEmployee(teamData);
    //     } else {
    //         return teamData;
    //     }
    // })
};




module.exports = Team;