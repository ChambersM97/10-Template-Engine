// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
}

Employee.prototype.getName = function() {}
Employee.prototype.getId = function() {code goes here}
Employee.prototype.getEmail = function() {}
Employee.prototype.getRole = function() {}

new Employee ();

//it's like import or exchange or something
//it takes the object the constructor function makes and takes it off the page
//to one of the designated ones: Engineer, Intern, and Manager
// export.(???)
//module.exports = Employee;