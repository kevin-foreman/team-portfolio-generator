// Engineer class will extends Employee class
// In addition to Employee's properties,
// Engineer will have github, getGithub, and getRole

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '') {
        super(name);

    }


getRole() {
    return {
       role: this.class,
    }
} 

getGithub() {
    return {
        github: this.github,
    }

}
}


module.exports = Engineer;