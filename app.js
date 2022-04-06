// Need all the dependencies here


const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');



// question prompts (format from inquirer)
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
            message: `Please enter the team manager's email (required)`,
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
            message: `Please enter the team manager's phone number`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the phone number');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmEngineer',
            message: 'Would you like to enter information for an engineer?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about the Engineer:',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};
