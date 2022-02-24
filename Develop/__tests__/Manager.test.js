const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('David', 20, 'david@somecompany.com', 12);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});
test('test pulling office number from manager', () => {
    const manOfficeNum = new Manager('David', 20, 'david@somecompany.com', 12);

    expect(manOfficeNum.officeNumber).toEqual(12);

});
test('test pulling manager role', () => {
    const manRole = new Manager('David', 20, 'david@somecompany.com', 12);

    expect(manRole.getRole()).toEqual('Manager');
});
