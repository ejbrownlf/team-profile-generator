class Manager {
    //sets role to manager and office number to user input
    getRole(ex, number) {
         ex.role = 'Manager';
         ex.officeNumber =`Office Number: ${number}`;
    };
};

module.exports = Manager;