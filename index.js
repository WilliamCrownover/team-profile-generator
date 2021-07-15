// Packages/Modules
const inquirer = require("inquirer");
const fs = require("fs");

// Inquirer question arrays
const nextTeamMember = [
    {
        type: "list",
        message: "Would you like to add another team member?",
        name: "teamMember",
        choices: ["Engineer","Intern","Finished"]

    }
]
const managerQuestions = [
    {
        type: "input",
        message: "What is the team manager's Name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the team manager's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the team manager's Email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the team manager's Office Number?",
        name: "officeNumber"
    }
]
const engineerQuestions = [
    {
        type: "input",
        message: "What is this engineer's Name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is this engineer's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is this engineer's Email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is this engineer's GitHub Username?",
        name: "github"
    }
]
const internQuestions = [
    {
        type: "input",
        message: "What is this intern's Name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is this intern's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is this intern's Email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is this intern's School Name?",
        name: "school"
    }
]