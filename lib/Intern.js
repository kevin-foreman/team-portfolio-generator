// Intern class will extend Employee class
// Will use the properties of Employee, and additional property of getRole, and getSchool

const inquirer = require('inquirer');
const Employee = require ('./Employee');

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email);

        this.role = 'Intern';
        this.school = school;
    }

getRole() {
    return this.role; // overridden to return Intern
}

getSchool() {
    return this.school;
};
}
module.exports = Intern;