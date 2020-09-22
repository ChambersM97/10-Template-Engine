// TODO: Write code to define and export the Employee class
function Employee (name, id, email ) {
    this.name = name
    this.id = id
    this.email = email
    this.getId()
    this.getEmail()
    // get role return 'Employee' not sure what that does yet
    this.getRole()
}

new Employee ();

//it's like import or exchange or something
//it takes the object the constructor function makes and takes it off the page
//to one of the designated ones: Engineer, Intern, and Manager
// export.(???)
module.exports = Employee;