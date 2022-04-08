// Engineer class will extends Employee class
// In addition to Employee's properties,
// Engineer will have github, getGithub, and getRole

const Employee = require('./Employee');

// some syntactical sugar for you below
class Engineer extends Employee {
    constructor(name = '') {
        super(name);

    }


getRole() {
    return {
        role: 'Engineer',
    }
} 

getGithub() {
    return {
        github: this.github,
    }

}
}


module.exports = Engineer;