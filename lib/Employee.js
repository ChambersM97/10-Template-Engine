// TODO: Write code to define and export the Employee class
class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }

    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }
    
    //Returns 'Employee', I think this is where you place manager, intern, and engineer
    getRole() {
        return 'Employee';
    }
}
  
//new Employee ();

//it's like import or exchange or something
//it takes the object the constructor function makes and takes it off the page
//to one of the designated ones: Engineer, Intern, and Manager
// export.(???)
module.exports = Employee;
//console.log(Employee)