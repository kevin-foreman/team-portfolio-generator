// Tests to verify user input
// Tests to verify the right kind of input is recieved
// Tests to verify properties are inherited from Employee class
// Tests on this class will be limited since tests have already proven...
// verfiable on Engineer class, and this class shares the same relationship with "Employee"

jest.mock('../lib/Employee');


const Intern = require('../lib/Intern');
const { expect } = require('@jest/globals');


test('getSchool() returns schoool from user provided value', () => {
    const intern = new Intern('Steve');

    expect(intern.getSchool()).toEqual(expect.any(Object));
});

test("getRole() returns 'Intern' ", () => {
    const manager = new Manager('Steve');
    
    expect(intern.getRole()).toEqual(expect.any(Object));
});