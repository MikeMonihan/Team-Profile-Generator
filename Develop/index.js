const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');

const teamArray = [];

const addManager = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the team manager's name: ",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }else {
                    console.log('Please enter a valid name for the team manager: ')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the team manager's ID: ",
            validate: idInput => {
                if(isNaN(idInput)) {
                    console.log ("Please enter a valid ID for the team manager: ")
                    return false;
                } else {
                    return true; 
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the team manager's email: ",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if(valid){
                    return true;
                } else {
                    console.log ("Please enter a valid Email for the team manager: ")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the team manager's office number: ",
            validate: officeNum => {
                if(isNaN(officeNum)) {
                    console.log("Please enter a valid office number for the team manager: ")
                    return false;
                } else {
                    return true; 
                }
            }
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        //console.log(manager);
    })
};
const addEmployee = () => {
    console.log('Next add employees to the team.');

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Choose the employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name:  ",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a valid name for your employee: ")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID: ",
            validate: idInput => {
                if(isNaN(idInput)) {
                    console.log ("Please enter a valid ID for your employee: ")
                    return false;
                } else {
                    return true; 
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email: ",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if(valid){
                    return true;
                } else {
                    console.log ("Please enter a valid Email for your employee: ")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school: ",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log("Please enter a valid school for your intern: ")
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's github username: ",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log("Please enter a valid github username for your employee: ")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Do you want to add more employees?',
            default: false
        }
    ])
    .then(employeeInput => {
        let {name, id, email, role, github, school, confirmAddEmployee} = employeeInput;

        let employee;

        if(role === 'Engineer'){
            employee = new Engineer(name, id, email, github);
            //console.log(employee);
        }
        if(role === 'Intern'){
            employee = new Intern(name, id, email, school);
            //console.log(employee);
        }
        teamArray.push(employee);

        if(confirmAddEmployee) {
            return addEmployee(teamArray);
        }else {
            return teamArray; 
        }
    })
};

const writeToFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team webpage has been generated, your file is inside the ./dist/ folder labeled index.html')
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeToFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });