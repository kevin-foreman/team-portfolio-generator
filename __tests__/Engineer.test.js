// Tests to verify user input
// Tests to verify the right kind of input is recieved
// Tests to verify properties are inherited from Employee class

jest.mock('../lib/Employee');


const Engineer = require('../lib/Engineer');
const { expect } = require('@jest/globals');


test('creaetes an engineer object', () => {
    const engineer = new Engineer(name = 'Steve');

    expect(engineer.name).toBe('Steve');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

    console.log(engineer.school);
});

test('getGithub() returns github from user provided value', () => {
    const engineer = new Engineer('Steve');

    expect(engineer.getGithub()).toEqual(expect.any(Object));
});

test("getRole() returns 'Engineer' ", () => {
    const engineer = new Engineer('Steve');
    
    expect(engineer.getRole()).toEqual(expect.any(Object));
});