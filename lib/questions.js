//array of questions that can be asked based which type of employye is chosen
module.exports = [
    {
        type: 'input',
        message: "What is their name?",
        name: 'managerName'
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: `id`
    },
    {
        type: 'input',
        message: 'What their email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is their office number?',
        name: 'officeNumber',
    },
    {
        type: 'input',
        message: 'What is their github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What school do they go to?',
        name: 'school',
    },
    {
        type: 'list',
        message: 'Which type of employee would you like to add?',
        choices: ['Engineer', 'Intern', 'None'],
        name: 'type',
    },

]