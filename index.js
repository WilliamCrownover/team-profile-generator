// Packages/Modules
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Inquirer question arrays
const nextTeamMember = [
    {
        type: "list",
        message: "Would you like to add another team member?",
        name: "teamMember",
        choices: ["Engineer","Intern","Finished"]

    }
];
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
];
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
];
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
];

// Stored team members array
let teamMembers = [];

// Ask the user for info on an engineer team member
const askforEngineerInfo = () => {
    return inquirer
        .prompt(engineerQuestions)
        .then((engineerAnswers) => {
            teamMembers.push(new Engineer(engineerAnswers));

            return askforNextTeamMember();
        });
}

// Ask the user for info on an intern team member
const askforInternInfo = () => {
    return inquirer
        .prompt(internQuestions)
        .then((internAnswers) => {
            teamMembers.push(new Intern(internAnswers));

            return askforNextTeamMember();
        });
}

// Ask the user what team member they would like to add or finish process
const askforNextTeamMember = () => {
    return inquirer
        .prompt(nextTeamMember)
        .then((nextTeamMemberAnswer) => {
            switch(nextTeamMemberAnswer.teamMember) {
                case "Engineer":
                    return askforEngineerInfo();
                case "Intern":
                    return askforInternInfo();
                default:
                    return;
            }
        });
}

// Initialize the question process
const init = () => {
    inquirer
        .prompt(managerQuestions)
        .then((managerAnswers) => {
            teamMembers.push(new Manager(managerAnswers));

            return askforNextTeamMember();
        })
        .then(() => {
            console.log(teamMembers);
        })
};

init();