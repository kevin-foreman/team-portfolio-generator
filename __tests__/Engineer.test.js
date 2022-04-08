// Test to verify user input
// Test to verify the right kind of input is recieved
// Test to verify properties are inherited from Employee class

const Engineer = reqiure('./lib/Engineer')
jest.mock('../lib/Employee')

test('creaetes an engineer object', () => {
    const engineer = new Engineer('Steve');

    expect(engineer.name).toBe('Steve');
    expect(engineer.id).toBe(expect.any(Number));
    expect(engineer.email).toBe(expect.any(string));
    expect(engineer.github).toBe(expect.any(string));
})