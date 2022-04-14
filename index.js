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

// Team.prototype.buildTeam = function() { // tried this way first, but const arrow function is cleaner
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

                // note: I did find a potential vulnerability while using this method
                // to validate an email input.
                // if the user enters a long email that happens to meet the 
                // validation criteria, but is not an actual email address,
                // this validation method could freeze the user's browser.
                // use with caution.

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
            name: 'officeNumber',
            message: `Please enter the team manager's office number`,
            validate: nameInput => {
                if (nameInput === undefined) {
                    console.log('Please enter a phone number');
                    return false;
                } else {
                    
                    return true;
                }
                }
        },
])
     // use a push to get all the manager's answers
     // and create an instance of a manager
    .then(managerInfo => {
        const { name, id, email, officeNumber } = managerInfo;
        const manager = new Manager (name, id, email, officeNumber);

        teamMemberArray.push(manager);
        console.log(manager);
    })
};

// add employees to the team

const addEmployee = () => {

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Employee name is required");
                    return false; 
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID number",
            validate: nameInput => {
                // Using NaN again
                if (isNaN(nameInput)) {
                    console.log("ID number can only be a number")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Not a valid email')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the engineer's github username",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Engineer's github username is required")
                    // return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Intern's school is required")
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Do you want to add more team members?',
            default: false
        }
    ])

    // after all the information has been captured, get captured information into the empty array
    .then(employeeData => {

        const { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {

            employee = new Engineer (name, id, email, github);
            console.log(Engineer);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(Intern);
        }

        teamMemberArray.push(employee);
        // allow the addition of team members to continue as many times as necessary

        if (confirmAddEmployee) {
            return addEmployee(teamMemberArray);

        } else {
            return teamMemberArray;
        }
    })
};

// Write the captured data to an html file
// send it to the same file location as the css so the link to the styling works


const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {

        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Team portfolio has been created. Grab the 'index.html' in the ./dist folder")
        }
    })
};

promptUser()
    .then(addEmployee)
    .then(teamMemberArray => {
        return generateHTML(teamMemberArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
// final catch
    .catch(err => {
        if (err) [
            console.log(err)
        ]

    });