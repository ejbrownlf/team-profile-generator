const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const questions = require('./questions');

//array that contains all employee info
const myTeam = [];

//array for holding all the html code that gets created
const htmlArr = []

//starter html code
const myHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Team Profile</title>

    <!-- stylesheets -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
            
  </head>

  <body>

    <div class="jumbotron bg-red">
        <h1 class="text-center">My team</h1>
    </div>

    <div class="modal-body">
        <div class="container-fluid">
            <div class="row">`

htmlArr.push(myHtml)

//initialized user ID that gets iterated
let userID = 1;

// writes the html file to the correct directory
function writeToFile() {
    const html = htmlArr.join(' ')

    fs.writeFile(__dirname + "/../dist/index.html", html, err => {
        if(err) console.log(err);
        else console.log('success!');
    })
}

//dynamically creates bootstrap html elements depending on how many users are created and what information they hold
function createHTML() {
    myTeam.forEach((member) => {
        const htmLDynamic = `
                <div class="card-blockchain col-md-4">
                    <div class="card text-black  mb-3" >
                        <div class="card-header">${member.role}</div>
                        <div class="card-body">
                            <h5 class="card-title">${member.name}</h5>
                            <div class="card" >
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">ID: ${member.id}</li>
                                    <li class="list-group-item">Email: 
                                    <a href="mailto:${member.email}">${member.email}</a></li>
                                    <li class="list-group-item">${member[Object.keys(member)[4]]}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        `
        htmlArr.push(htmLDynamic)
    });

    // ending html code
    htmlArr.push(`
            </div>
        </div>
    </div>

</body>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</html>`)

    writeToFile();
}

//Asks user to create a new team member and created a new employee based on feedback or ends the application if none is chosen
function askForNext() {
    console.log(`Here is the team so far:`, myTeam)
    inquirer
        .prompt(questions[6]).then(val => {
            if (val.type === 'Engineer'){
                const employee = new Employee();
                employee.startEngineer();

            }
            if (val.type === 'Intern'){
                const employee = new Employee();
                employee.startIntern();
            }
            if (val.type === 'None'){
                console.log(myTeam)
                console.log("\nCreating your html page now!");
                createHTML();
            }
        })
}

//Employee class template for each employee of the users team
class Employee {
    constructor() {
        this.name = '';
        this.id = '';
        this.email = '';
    }

    //starting point for application
    start() {
        console.log('Welcome to the team building application! Please enter the name of your team manager:')
        const manager = new Manager();
        inquirer
            .prompt([questions[0], questions[2], questions[3]]).then((val) => {
                this.getName(val.managerName);
                this.getID();
                this.getEMail(val.email);
                manager.getRole(this, val.officeNumber);
                myTeam.push(this);
                askForNext();
            });
    }

    //if an engineer is added to the team this will run
    startEngineer() {
        console.log('You have chosen to add an engineer to your team!')
        const engineer = new Engineer();
        inquirer
            .prompt([questions[0], questions[2], questions[4]]).then((val) => {
                this.getName(val.managerName);
                this.getID();
                this.getEMail(val.email);
                engineer.getRole(this);
                engineer.getGithub(this, val.github);
                myTeam.push(this);
                askForNext();
            });
    }

    //if an intern is added to the team this will run
    startIntern() {
        console.log('You have chosen to add an engineer to your team!')
        const intern = new Intern();
        inquirer
            .prompt([questions[0], questions[2], questions[5]]).then((val) => {
                this.getName(val.managerName);
                this.getID();
                this.getEMail(val.email);
                intern.getRole(this);
                intern.getSchool(this, val.school);
                myTeam.push(this);
                askForNext();
            });
    }

    //set name to user response
    getName(newName) {
        this.name = newName;
    }

    //starts with an id of 1 and increase by one for each member added to the team
    getID() {
        this.id = userID;
        userID++;
    }

    //set email to user response
    getEMail(email) {
        this.email = email;
    }

    //cath all function incase an employee is not one of the predefined categories
    getRole() {
        this.role = 'Employee';
    }
};



module.exports = Employee;