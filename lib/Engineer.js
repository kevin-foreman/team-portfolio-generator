// Engineer class will extend Employee class
// In addition to Employee's properties,
// Engineer will have github, getGithub, and getRole

const inquirer = require('inquirer');
const Employee = require('./Employee');


// some syntactical sugar for you below
class Engineer extends Employee {
    constructor(name = '') {
        super();

        this.role = 'Engineer';
        this.github = 'github';
}

getRole() {
        return {
            role: this.role,
        }
}

getGithub() {
        return {
            github: this.github
        }
}

};

module.exports = Engineer;