const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);

        this.officeNumber = officeNumber;
    }
};

getRole() {
    return `${this.name}`;  // Overridden to return 'Manager'
} 

module.exports = Manager;