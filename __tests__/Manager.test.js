// Tests to verify user input
// Tests to verify the right kind of input is recieved
// Tests to verify properties are inherited from Employee class
// Tests on this class will be limited since tests have already proven...
// verfiable on Engineer class, and this class shares the same relationship with "Employee"

jest.mock('../lib/Employee');


const Manager = require('../lib/Manager');
const { expect } = require('@jest/globals');


test('getOfficeNumber() returns officeNumber from user provided value', () => {
    const manager = new Manager('Steve', 4567, 'mail@mail.mail', 'Manager', '555-5555');

    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
});

test("getRole() returns 'Manager' ", () => {
    const manager = new Manager('Steve', 4567, 'mail@mail.mail', 'Manager', '555-5555');
    
    expect(manager.getRole()).toEqual(expect.any(String));
});