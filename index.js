const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./employee");
const { choices } = require("yargs");
const { start } = require("node:repl");

const writeFileAsync = util.promisify(fs.writeFile);

function CreateProfile() {
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
    ]).then(function(data) {
        let employeeName = data.start
        let employeeId = data.employeeId
        let employeeEmail = data.email
        let employeeOfficeNumber = data.officeNumber

        fs.writeFile("index.html", html, function(err) {
            if
        })
    });

};

CreateProfile();


