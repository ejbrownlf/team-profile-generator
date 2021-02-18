const Employee = require("../lib/Employee");
const Engineer = require('../lib/Engineer');

describe('getGithub', () => {
    it('creates an html element that links to a github page', () => {
        const employee = new Employee();
        const engineer = new Engineer();
        engineer.getGithub(employee, "ejbrownlf");
        expect(employee).toEqual({"name": "", "id": "", "email": "", "github": `Github: <a href="http://github.com/ejbrownlf" target="_blank">ejbrownlf</a>`});
    });
    
});

describe('getRole', () => {
    it('updates role to Engineer', () => {
        const employee = new Employee();
        const engineer = new Engineer();
        engineer.getRole(employee, 123);
        expect(employee).toEqual({"name": "", "id": "", "email": "", "role": "Engineer"});
    });
    
});
