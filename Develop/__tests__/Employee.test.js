const Employee = require('../lib/Employee');

test('test making new employee object', () => {
    const emp = new Employee('David', 20, 'david@somecompany.com');

    expect(emp.name).toEqual(expect.any(String));
    expect(emp.id).toEqual(expect.any(Number));
    expect(emp.email).toEqual(expect.any(String));

});
test('test pulling employee name', () => {
    const empName = new Employee('David', 20, 'david@somecompany.com');

    expect(empName.getName()).toEqual(expect.any(String));
});
test('test pulling employee ID', () => {
    const empID = new Employee('David', 20, 'david@somecompany.com');

    expect(empID.getID()).toEqual(expect.any(Number));

});
test('test pulling employee email', () => {
    const empEmail = new Employee('David', 20, 'david@somecompany.com');

    expect(empEmail.getEmail()).toEqual(expect.stringContaining(empEmail.email.toString()));

});
test('test pulling employee role', () => {
    const empRole = new Employee('David', 20, 'david@somecompany.com');

    expect(empRole.getRole()).toEqual('Employee');

});