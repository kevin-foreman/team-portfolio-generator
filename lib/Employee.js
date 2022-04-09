// This is the parent class
// Must have properties of:
// name, id, email, getName(), getId(), getEmail(), getRole()(returns 'Employee')

const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
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
    return {
        role: this.role,
    }    
}
}

module.exports = Employee;
