const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer")
// const Employee = require("./lib/employee");
const util = require("util");
// const { writeFileSync } = require("node:fs");
// const Engineer = require("./lib/engineer");
// const { choices } = require("yargs");
// const { start } = require("node:repl");

const writeFileAsync = util.promisify(fs.writeFile);

const html = [``]

function createProfile() {
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
        },
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
    ]).then(function(answers) {
        if (answers.mainMenu === "Add Engineer") {
            addEngineer()
            // html.push(engineerHTML(engineers));
        }
    })
}

// async function cont() {
//     await inquirer.prompt([
//         {
//             type: "list",
//             message: "Choose to add an employee or finish team profile.",
//             name: "mainMenu",
//             choices: [
//                 "Add Engineer",
//                 "Add Intern",
//                 "Finish & Application"
//             ]
//         }
//     ]).then(function(answers) {
//         return answers = this.mainMenu
//     })
// }

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

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineername",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineeremployeeId",
            message: "Enter engineer's employee ID."
        },
        {
            type: "input",
            name: "engineeremail",
            message: "Enter engineer's email address."
        },
        {
            type: "input",
            name: "github",
            message: "Enter engineer's github."
        }
    ])
}

function engineerHTML(engineers) {
    // const engineers = new Engineer(id, name, email, github, getRole());
    // cont()
    return `
    <div class="col-sm-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${engineers.engineername}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the                                card's
                             content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${engineers.engineeremployeeId}</li>
                        <li class="list-group-item">Email: ${engineers.engineeremail}</li>
                        <li class="list-group-item">Github: ${engineers.github}</li>
                      </ul>
                    </div>
                </div>
    `;
}

// function addIntern(interns) {
//     return `
//     <div class="col-sm-4">
//                 <div class="card" style="width: 18rem;">
//                     <div class="card-body">
//                         <h5 class="card-title">${interns.start}</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of
//                             the                                card's
//                              content.</p>
//                     </div>
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item">Employee ID: ${interns.employeeId}</li>
//                         <li class="list-group-item">Email: ${interns.email}</li>
//                         <li class="list-group-item">Office #: ${interns.officeNumber}</li>
//                         <li class="list-group-item">Office #: ${interns.officeNumber}</li>                        </ul>
//                     </div>
//                 </div>
//     `
// }

async function endHTML() {
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
    .then(function (answers, engineers) {
        
        html.push(createHTML(answers))
        // html.push(engineerHTML(engineers));
        

        
        // let employeeName = data.start
        // let employeeId = data.employeeId
        // let employeeEmail = data.email
        // let employeeOfficeNumber = data.officeNumber
        // const html = createHTML(answers);
        // if (answers.mainMenu === "Finish & Application") {
        //     cont()
        // }
        // html.push(endHTML())
        return writeFileAsync("index.html", html);
    })
    .catch(function (err) {
        console.log(err);
    });
// async function init() {
//     try {
//         const
//     }
// }

