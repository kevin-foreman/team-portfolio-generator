// This is the parent class
// Must have properties of:
// name, id, email, getName(), getId(), getEmail(), getRole()(returns 'Employee')


// using inquirer here seems to produce strange behavior
// const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.role = 'Employee';
    this.email = email;
    }


getName() {
    return this.name;
}

getId() {
    return this.id;
}

getEmail() {
    return this.email;
}

getRole() {
    return this.role;
}
}

module.exports = Employee;
