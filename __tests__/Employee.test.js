// This is the parent class test


const Employee = require('../lib/Employee');
const { expect } = require('@jest/globals');

// jest.mock('../lib/Employee');


test('creaetes an employee object', () => {
    const employee = new Employee('Steve', 99448, 'mai@email.mail', 'Employee');

    expect(employee.name).toBe('Steve');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

    console.log(employee.id);
});


test("getRole () returns 'employee' ", () => {
    const employee = new Employee('Employee', 99448, 'mai@email.mail', 'Employee');
    
    expect(employee.getRole()).toEqual(expect.any(String));

});