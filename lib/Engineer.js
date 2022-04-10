// Engineer class will extend Employee class
// In addition to Employee's properties,
// Engineer will have github, getGithub, and getRole


const Employee = require('./Employee');
const inquirer = require('inquirer');



// some syntactical sugar for you below
class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email);

        this.role = role;
        this.github = github;
}

getRole() {
        return this.role;
}

getGithub() {
        return this.github;
}

};

module.exports = Engineer;