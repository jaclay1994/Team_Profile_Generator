const inquirer = require("inquirer");
const fs = require("fs");
const { _typeOf } = require("jest-mock");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
// const Engineer = require("./lib/engineer")
const Employee = require("./lib/employee");
// const util = require("util");
// const { writeFileSync } = require("node:fs");
// const Engineer = require("./lib/engineer");
// const { choices } = require("yargs");
// const { start } = require("node:repl");

// const writeFileAsync = util.promisify(fs.writeFile);

let html = ""

async function createProfile() {
    html = html.concat(createHTML());
    return inquirer.prompt([
        {
            type: "input",
            name: "start",
            message: "Welcome to the TP Generator! What is your team manager's name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "Enter manager's employee ID."
        },
        {
            type: "input",
            name: "email",
            message: "Enter manager's email address."
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter manager's office number."
        }
    ]).then(function mainMenu() {
        inquirer.prompt([
            {
                type: "list",
                message: "Choose to add an employee or finish team profile.",
                name: "mainMenu",
                choices: [
                    "Add Engineer",
                    "Add Intern",
                    "Finish & Application"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.mainMenu) {
                case "Add Engineer":
                    function addEngineer() {
                        inquirer.prompt([
                            {
                                type: "input",
                                name: "name",
                                message: "What is the engineer's name?"
                            },
                            {
                                type: "input",
                                name: "id",
                                message: "Enter engineer's employee ID."
                            },
                            {
                                type: "input",
                                name: "email",
                                message: "Enter engineer's email address."
                            },
                            {
                                type: "input",
                                name: "github",
                                message: "Enter engineer's github."
                            }
                        ]).then(function (answers) {
                            console.log(answers)
                            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                            console.log(engineer)
                            engineerHTML(engineer)
                            html = html.concat(engineerHTML(engineer))
                            //   const engineer = new Engineer ({})  
                            mainMenu()

                        })
                    };
                    addEngineer();
                    break;
                case "Add Intern":
                    function addIntern() {
                        inquirer.prompt([
                            {
                                type: "input",
                                name: "internname",
                                message: "What is the intern's name?"
                            },
                            {
                                type: "input",
                                name: "internemployeeId",
                                message: "Enter intern's employee ID."
                            },
                            {
                                type: "input",
                                name: "internemail",
                                message: "Enter intern's email address."
                            },
                            {
                                type: "input",
                                name: "school",
                                message: "Enter intern's school."
                            }
                        ]).then(function (answers) {
                            const intern = new Intern(answers.internname, answers.internemployeeid, answers.internemail, answers.school)
                            console.log(intern)
                            engineerHTML(intern)
                            html = html.concat(internHTML(intern))
                            //   const engineer = new Engineer ({})  
                            mainMenu()
                        })
                    };
                    addIntern();
                    break;

                case "Finish & Application":
                    try {
                        console.log(typeof html)
                        console.log("Success!")
                        html = html.concat(endHTML());
                        console.log(typeof html)


                        fs.writeFile("index.html", html, err => {
                            if (err) {
                                console.error(err)
                                return
                            }
                        });
                    } catch (err) {
                        console.log(err);
                    }

                default:
                    return
            }
        })
    })
}

function createHTML() {

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

        <title>TeamProfileGenerator</title>
    </head>

    <body>
        <nav class="navbar navbar-light bg-danger mb-5">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Team Profile Generator</a>
            </div>
        </nav>
        <div class="container">
            <div class="row">
    `
}

function engineerHTML(engineer) {
    // const engineers = new Engineer(id, name, email, github, getRole());
    // cont()
    return `
    <div class="col-sm-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${engineer.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the                                card's
                             content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${engineer.id}</li>
                        <li class="list-group-item">Email: ${engineer.email}</li>
                        <li class="list-group-item">Github: ${engineer.github}</li>
                      </ul>
                    </div>
                </div>
    `;
}

function internHTML(interns) {
    return `
    <div class="col-sm-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${interns.start}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the                                card's
                             content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${interns.employeeId}</li>
                        <li class="list-group-item">Email: ${interns.email}</li>
                        <li class="list-group-item">Office #: ${interns.officeNumber}</li>
                        <li class="list-group-item">Office #: ${interns.officeNumber}</li>                        </ul>
                    </div>
                </div>
    `
}

function endHTML() {
    return `
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
            crossorigin="anonymous"></script>
    </body>

    </html>
    `
}

createProfile()
