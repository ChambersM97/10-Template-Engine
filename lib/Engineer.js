// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

//this grabs the class of Employee from the Employee js file
//so the engineer class can extend off of it
const Employee = require("./Employee");

//We use the class below to add to our 'Employee' class        
class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email)
        this.github = github;
        }

    getGithub()  {
        return this.github
    }

    getRole() {
        return "Engineer"
    }
}


module.exports = Engineer