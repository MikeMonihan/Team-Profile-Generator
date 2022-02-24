const Intern = require('../lib/Intern');

test('test creating Intern object', () => {
    const intern = new Intern('David', 20, 'david@somecompany.com', 'Case Western');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});
test('test pulling school from intern', () => {
    const internSchool = new Intern('David', 20, 'david@somecompany.com', 'Case Western');

    expect(internSchool.getSchool()).toEqual('Case Western');

});
test('test pulling intern role', () => {
    const internRole = new Intern('David', 20, 'david@somecompany.com', 'Case Western');

    expect(internRole.getRole()).toEqual('Intern');
});
