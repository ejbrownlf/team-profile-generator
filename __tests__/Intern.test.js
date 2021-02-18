const Employee = require("../lib/Employee");
const Intern = require('../lib/Intern');

describe('getSchool', () => {
    it('creates text for an html element displaying the school of the intern', () => {
        const employee = new Employee()
        const intern = new Intern()
        intern.getSchool(employee, 'UNC')
        expect(employee).toEqual({"name": "", "id": "", "email": "", "school": 'School: UNC'})
    });
    
});

describe('getRole', () => {
    it('updates the role to Intern', () => {
        const employee = new Employee()
        const intern = new Intern()
        intern.getRole(employee)
        expect(employee).toEqual({"name": "", "id": "", "email": "", "role": "Intern",})
    });
    
});
