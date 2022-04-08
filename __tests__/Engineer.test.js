// Test to verify user input
// Test to verify the right kind of input is recieved
// Test to verify properties are inherited from Employee class

const Engineer = require('../lib/Engineer')
jest.mock('../lib/Employee')

test('creaetes an engineer object', () => {
    const engineer = new Engineer('Steve');

    expect(engineer.name).toBe('Steve');
    expect(engineer.id).toBe(expect.any(Number));
    expect(engineer.email).toBe(expect.any(string));
    // expect(engineer.github).toBe(expect.any(string));
});

test('sets engineer github to user provided value', () => {
    const githubValue = 'github';

    expect(engineer.githubValue).toBe(expect('url'))
});

test("getRole () returns 'Engineer' ", () => {
    expect ($this.role.toBe('Engineer'));
});