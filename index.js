// Need all the dependencies here
const inquirer = require('inquirer');
// const Employee = require('./Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generateHTML = require('./src/generate-team-page');



// Set up empty array to hold team member information
const teamMemberArray = [];


// question prompts (format from inquirer)
// function to start the Team builder and prompt user for team members...
// starting with the Manager

// Team.prototype.buildTeam = function() { // tried this way first, but const function would be cleaner
const promptUser = () => {
    return inquirer.prompt([
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
            name: 'id',
            message: `Please enter the team manager's ID number (required)`,
            validate: nameInput => {
                // Reject if not a number (NaN)
                
                if (isNaN(nameInput)) {
                    console.log('ID number is required');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `Please enter the team manager's email address (required)`,
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter a valid email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office-number',
            message: `Please enter the team manager's office number`,
            validate: nameInput => {
                if (nameInput === null) {
                    console.log('Please enter a phone number');
                    return false;
                } else {
                    
                    return true;
                }
                }
        },
    ])
     // use a push to get all the answers
     .then(managerInfo => {
         const { name, id, email, officeNumber } = managerInfo;
         const manager = new Manager (name, id, email, officeNumber);

         teamMemberArray.push(manager);
         console.log(manager);
     })
};

promptUser();
        // {
        //     type: 'list',
        //     name: 'employee-selection',
        //     message: 'Which type of employee would you like to add to your team?',
        //     choices: ['Engineer', 'Intern']
        // }
        // .then // handle the user inputs to build out the manager.js
        // // 
        

        //     // const newEmployee = () => {
        //     .then switch (newEmployee) {
        //     case "Engineer":
        //         inquirer
        //         .prompt([
        //             {
        //                 type: 'input',
        //                 name: 'id-number',
        //                 message: 'Enter Engineer employee ID number.'
        //             },
        //             {
        //                 type: 'input',
        //                 name: 'github',
        //                 message: 'Enter the Engineer Github username.'
        //             }
        //         ])
        //         .then(function() {
        //             newEmployee.push()
        //         });
        //         break;
        //         case "Intern":
        //             inquirer
        //             .prompt([
        //             {
        //                 type: 'input',
        //                 name: 'id-number',
        //                 message: 'Enter the intern school.'
        //             }    
        //             ]).then(function() {
        //                 newEmployee.push()
        //             }
// call promptUser
// after all the information has been captured, print the captured array to the base html

// promptUser()
//         .then(addEmployee)
//         .then(teamMemberArray => {
//             return generateHTML(teamMemberArray);
//         })
//         // using fs to write the file
//         .then(pageHTML => {
//             return fs.writeFile(pageHTML);
//         })