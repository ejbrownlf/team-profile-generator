const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it('creates a new class called employee with empty variables called name, id, and email', () => {
        expect(new Employee()).toEqual({"name": "", "id": "", "email": ""});
    });

    describe('getName', () => {
        it('sets the name varibale to the inputed value', () => {
            const employee = new Employee();
            employee.getName("name");
            expect(employee).toEqual({"name": "name", "id": "", "email": ""});
        });
        
    });

    describe('getID', () => {
        it('sets the id varibale to an interating number', () => {
            const employee = new Employee();
            employee.getID()
            expect(employee).toEqual({"name": "", "id": 1, "email": ""});
        });
        
    });

    describe('getEmail', () => {
        it('sets the email varibale to the inputed value', () => {
            const employee = new Employee();
            employee.getEMail("ejbrownlf");
            expect(employee).toEqual({"name": "", "id": "", "email": "ejbrownlf"});
        });
        
    });

    describe('getRole', () => {
        it('sets a new varibale in the constructor called role to employee', () => {
            const employee = new Employee();
            employee.getRole();
            expect(employee).toEqual({"name": "", "id": "", "email": "", "role": "Employee"});
        });
        
    });

    
});