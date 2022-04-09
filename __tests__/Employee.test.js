// This is the parent class test

jest.mock('../lib/Employee');


const Employee = require('../lib/Employee');
const { expect } = require('@jest/globals');


test('creaetes an employee object', () => {
    const employee = new Employee('Class of Employee');

    expect(employee.name).toBe('Class of Employee');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));

    console.log(employee.school);

});


test("getRole () returns 'employee' ", () => {
    const employee = new Employee('Class of Employee');
    
    expect(employee.getRole()).toEqual(expect.any(Object));

});