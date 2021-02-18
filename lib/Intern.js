class Intern {
    // sets school to user input
    getSchool(ex, answer) {
        ex.school = `School: ${answer}`;
    }

    //sets role to intern
    getRole(ex) {
        ex.role = 'Intern';
    };

};

module.exports = Intern;