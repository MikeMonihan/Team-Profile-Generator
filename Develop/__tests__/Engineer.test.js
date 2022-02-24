const Engineer = require('../lib/Engineer');

test('test creating engineer object', () => {
    const engi = new Engineer('David', 20, 'david@somecompany.com', 'davidsGithub');

    expect(engi.name).toEqual(expect.any(String));
    expect(engi.id).toEqual(expect.any(Number));
    expect(engi.email).toEqual(expect.any(String));
    expect(engi.github).toEqual(expect.any(String));
});
test('test pulling github from engineer', () => {
    const engi = new Engineer('David', 20, 'david@somecompany.com', 'davidsGithub');

    expect(engi.getGithub()).toEqual('davidsGithub');

});
test('test pulling engineer role', () => {
    const engiRole = new Engineer('David', 20, 'david@somecompany.com', 'davidsGithub');

    expect(engiRole.getRole()).toEqual('Engineer');
});
