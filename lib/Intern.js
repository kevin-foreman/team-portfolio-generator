// Intern class will extend Employee class
// Will use the properties of Employee, and additional property of getRole, and getSchool

const inquirer = require('inquirer');
const Employee = require ('./Employee');

class Intern extends Employee {
    constructor(name = '') {
        super(name);

        this.school = school;
    }

getRole() {
    // some parameters
    return `${this.class}`; // overridden to return Intern
}

getSchool() {
    // some parmeters
    return `${this.school}`
}
};

module.exports = Intern;