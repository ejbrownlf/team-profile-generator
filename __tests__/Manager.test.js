const Employee = require("../lib/Employee");
const Manager = require('../lib/Manager');

describe('getRole', () => {
    it('updates role to manager and sets the office number to the inputed value', () => {
        const employee = new Employee();
        const manager = new Manager();
        manager.getRole(employee, 123);
        expect(employee).toEqual({"name": "", "id": "", "email": "", "role": "Manager", "officeNumber": 123});
    });
    
});

    
