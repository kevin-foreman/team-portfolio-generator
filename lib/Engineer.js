// Engineer class will extends Employee class
// In addition to Employee's properties,
// Engineer will have github, getGithub, and getRole

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '') {
        super(name);

        this.github = github;
    }


getRole() {
    return `${this.class}`;  // Overridden to return 'Engineer'
} 

getGithub() {

}
}


module.exports = Engineer;