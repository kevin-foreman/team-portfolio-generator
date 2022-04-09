// This is the parent class
// Must have properties of:
// name, id, email, getName(), getId(), getEmail(), getRole()(returns 'Employee')

const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }


getName() {
    return {
        name: this.name,
    }
}

getId() {
    return {
        id: this.id,
    }
}

getEmail() {
    return {
        email: this.email,
    }
}

getRole() {
    return 'Employee';
}
}

module.exports = Employee;
