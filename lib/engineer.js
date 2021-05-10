const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, email, github, officeNumber) {
        super(name, id, email);
        this.github = github;
        this.officeNumber = officeNumber
    }

    getRole() {
        return "Engineer"
    };

    getGithub() {
        return this.github
    };
}

module.exports = Engineer