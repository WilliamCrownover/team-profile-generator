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
let cardsString = "";

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

const renderHTMLStart = () => {
    return fs.readFileSync("./src/start.html", "utf8", (err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        return data;
    });
}

const readCard = (type) => {
    return fs.readFileSync(`./src/${type}Card.html`, "utf8", (err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        return data;
    });
}

const replaceDataValues = (obj, string) => {
    string = string.replace("[NAME]", obj.getName());
    string = string.replace("[IDNUMBER]", obj.getId());
    string = string.replace("[EMAIL]", obj.getEmail());
    string = string.replace("[EMAIL]", obj.getEmail());
    return string;
}

const renderHTMLCards = () => {
    cardsString = "";
    for(let i = 0; i < teamMembers.length; i++) {
        let appendCard = "";
        const employeeType = teamMembers[i].constructor.name;
        switch(employeeType) {
            case "Manager":
                appendCard = readCard(employeeType);
                appendCard = appendCard.replace("[OFFICENUMBER]", teamMembers[i].getOfficeNumber());
                break;
            case "Engineer":
                appendCard = readCard(employeeType);
                appendCard = appendCard.replace("[GITHUB]", teamMembers[i].getGithub());
                appendCard = appendCard.replace("[GITHUB]", teamMembers[i].getGithub());
                break;
            case "Intern":
                appendCard = readCard(employeeType);
                appendCard = appendCard.replace("[SCHOOLNAME]", teamMembers[i].getSchool());
                break;
        }
        cardsString += replaceDataValues(teamMembers[i], appendCard);
    }
    return cardsString;
}

const renderHTMLEnd = () => {
    return fs.readFileSync("./src/end.html", "utf8", (err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        return data;
    });
}

const generateHTML = () => {
    return renderHTMLStart() +
        renderHTMLCards() +
        renderHTMLEnd();
}

const generateCSS = () => {
    return fs.readFileSync("./src/style.css", "utf8", (err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        return data;
    });
}

const writeToFile = (fileName, string) => {
    fs.writeFile(`./dist/${fileName}`, string, (err) => err ? console.error(err) : console.log('Success!'));
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
            const htmlString = generateHTML();
            writeToFile("index.html", htmlString);
            const cssString = generateCSS();
            writeToFile("style.css", cssString);
        })
        .catch((error) => {
            console.log(error);
        });
};

init();