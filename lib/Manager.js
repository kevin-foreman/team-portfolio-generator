// Manager class will exted Employee class
// Has all properties of the employee class plus..
// additional property of officeNumber, and getRole

// const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.role = 'Manager';
        this.officeNumber = officeNumber;
    }


getRole() {
    return this.role; // Overrides the Employees class to return 'Manager'
}

getOfficeNumber() {
    return this.officeNumber;
}
};


module.exports = Manager;