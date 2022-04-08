const Employee = require ('./Employee')

class Intern extends Employee {
    constructor(name = '') {
        super(name);

        this.school = school;
    }
}

getRole() {
    // some parameters
    return `${this.class}`; // overridden to return Intern
}

getSchool() {
    // some parmeters
    return `${this.school}`
}

module.exports = Intern;