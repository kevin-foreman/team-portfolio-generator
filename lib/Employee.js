// This is the parent class
// Must have properties of:
// name, id, email, getName(), getId(), getEmail(), getRole()(returns 'Employee')

const inquirer = require('inquirer');

class Employee {
    constructor(name = '') {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    }
}

getName() {
    // some parameters
}

getId() {
    // a parameter
}

getEmail() {
    // a parameter
}

getRole() {
    // returns 'Employee'
}


module.exports = Employee;
