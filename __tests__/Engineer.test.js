// Tests to verify user input
// Tests to verify the right kind of input is recieved
// Tests to verify properties are inherited from Employee class


const Engineer = require('../lib/Engineer');
const { expect } = require('@jest/globals');

jest.mock('../lib/Employee');



test('creaetes an engineer object', () => {
    const engineer = new Engineer('Steve', 4567, 'mail@mail.mail', 'Engineer', 'github.com');

    expect(engineer.name).toBe('Steve');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

    console.log(engineer.id);
});

test('getGithub() returns github from user provided value', () => {
    const engineer = new Engineer('Steve', 4567, 'mail@mail.mail', 'Engineer', 'github.com');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("getRole() returns 'Engineer' ", () => {
    const engineer = new Engineer('Steve', 4567, 'mail@mail.mail', 'Engineer', 'github.com');
    
    expect(engineer.getRole()).toEqual(expect.any(String));
});