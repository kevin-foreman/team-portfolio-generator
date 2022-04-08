// Test to verify user input
// Test to verify the right kind of input is recieved
// Test to verify properties are inherited from Employee class

jest.mock('../lib/Employee');

const Engineer = require('../lib/Engineer');
const { expect } = require('@jest/globals');


test('creaetes an engineer object', () => {
    const engineer = new Engineer('Steve');

    expect(engineer.name).toBe('Steve');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('sets engineer github to user provided value', () => {
    const engineer = new Engineer();
    const github = 'github';

    expect(engineer.github).toEqual(expect('https://github.com/octocat'))
});

test("getRole () returns 'Engineer' ", () => {
    const engineer = new Engineer();
    expect (this.role).toEqual('Engineer');
});