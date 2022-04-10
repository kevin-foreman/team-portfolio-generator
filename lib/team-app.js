// Need all the dependencies here
const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function Team () {
    this.Employee;
    this.Manager;
    this.Engineer;
    this.Intern;
}

// question prompts (format from inquirer)
// function to start the Team builder and prompt user for team members

Team.prototype.buildTeam = function() {
// const promptUser = () => {
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
            name: 'identification',
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
            type: 'confirm',
            name: 'confirm-engineer',
            message: 'Would you like to enter information for an engineer?',
            default: true
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Engineer?',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
    .then(teamData => {
        teamData.push(teamData);
        if (teamData.confirmAddEmployee) {
            return promptEmployee(teamData);
        } else {
            return teamData;
        }
    })
}

module.exports = Team;