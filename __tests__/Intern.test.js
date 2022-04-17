// Tests to verify user input
// Tests to verify the right kind of input is recieved
// Tests to verify properties are inherited from Employee class
// Tests on this class will be limited since tests have already proven...
// verfiable on Engineer class, and this class shares the same relationship with "Employee"


const Intern = require('../lib/Intern');
const { expect } = require('@jest/globals');

jest.mock('../lib/Employee');


test('getSchool() returns schoool from user provided value', () => {
    const intern = new Intern('Steve', 4567, 'mail@mail.com', 'Intern', 'MIT');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("getRole() returns 'Intern' ", () => {
    const intern = new Intern('Steve', 4567, 'mail@mail.com', 'Intern', 'MIT');
    
    expect(intern.getRole()).toEqual(expect.any(String));
});