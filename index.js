// Packages/Modules
const inquirer = require("inquirer");
const fs = require("fs");

// Inquirer question arrays
const managerQuestions = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "name"
    },

]