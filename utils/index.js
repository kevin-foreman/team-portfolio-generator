// Using Inheritance principles from Objec Oriented Programming
// Create one single "employee object" / constructor which will have base attributes
// From that object, create new objects such as Engineer, or Manager, which are both employees
// Manager will have different attributes than an Engineer or an Intern

const Employee = require('./Employee');
public class Employee {
    private int salary;

    public int getSalary() {
        return salary;
    }
}

public class Engineer extends Employee {
    private string accessRights;
};

Engineer.prototype = Object.create(Character.prototype);