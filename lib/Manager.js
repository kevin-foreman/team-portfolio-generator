// Manager class will exted Employee class
// Has all properties of the employee class plus..
// additional property of officeNumber, and getRole

const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);

        this.officeNumber = officeNumber;
    }


getRole() {
    return {
        name: this.role, // Overrides the Employees class to return 'Manager'
    };  
}

getOfficeNumber() {
return {
    officeNumber: this.officeNumber,
}
}
};


module.exports = Manager;