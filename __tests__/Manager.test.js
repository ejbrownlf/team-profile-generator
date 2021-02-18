const Employee = require("../lib/Employee");
const Manager = require('../lib/Manager');

describe('getRole', () => {
    it('updates role to manager and sets the office number to the inputed value', () => {
        const employee = new Employee();
        const manager = new Manager();
        const number = 123
        manager.getRole(employee, number);
        expect(employee).toEqual({"name": "", "id": "", "email": "", "role": "Manager", "officeNumber": `Office Number: ${number}`});
    });
    
});

    
