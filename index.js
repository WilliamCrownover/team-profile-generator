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
        name: "name",
        validate: (input) => {
            if(input !== "" && !(/\d/.test(input))) return true;
            return "Please enter a name without numeric characters.";
        }
    },
    {
        type: "input",
        message: "What is the team manager's ID?",
        name: "id",
        validate: (input) => {
            if(input !== "") return true;
            return "Please enter an ID.";
        }
    },
    {
        type: "input",
        message: "What is the team manager's Email?",
        name: "email",
        validate: (input) => {
            if(input !== "" && /@/.test(input)) return true;
            return "Please enter a full valid Email.";
        }
    },
    {
        type: "input",
        message: "What is the team manager's Office Number?",
        name: "officeNumber",
        validate: (input) => {
            if(input !== "") return true;
            return "Please enter an Office Number.";
        }
    }
];
const engineerQuestions = [
    {
        type: "input",
        message: "What is this engineer's Name?",
        name: "name",
        validate: (input) => {
            if(input !== "" && !(/\d/.test(input))) return true;
            return "Please enter a name without numeric characters.";
        }
    },
    {
        type: "input",
        message: "What is this engineer's ID?",
        name: "id",
        validate: (input) => {
            if(input !== "") return true;
            return "Please enter an ID.";
        }
    },
    {
        type: "input",
        message: "What is this engineer's Email?",
        name: "email",
        validate: (input) => {
            if(input !== "" && /@/.test(input)) return true;
            return "Please enter a full valid Email.";
        }
    },
    {
        type: "input",
        message: "What is this engineer's GitHub Username?",
        name: "github",
        validate: (input) => {
            if(input !== "") return true;
            return "Please enter a GitHub Username.";
        }
    }
];
const internQuestions = [
    {
        type: "input",
        message: "What is this intern's Name?",
        name: "name",
        validate: (input) => {
            if(input !== "" && !(/\d/.test(input))) return true;
            return "Please enter a name without numeric characters.";
        }
    },
    {
        type: "input",
        message: "What is this intern's ID?",
        name: "id",
        validate: (input) => {
            if(input !== "") return true;
            return "Please enter an ID.";
        }
    },
    {
        type: "input",
        message: "What is this intern's Email?",
        name: "email",
        validate: (input) => {
            if(input !== "" && /@/.test(input)) return true;
            return "Please enter a full valid Email.";
        }
    },
    {
        type: "input",
        message: "What is this intern's School Name?",
        name: "school",
        validate: (input) => {
            if(input !== "") return true;
            return "Please enter a School Name.";
        }
    }
];

// Stored team members array
let teamMembers = [];
// Global string to store card HTML
let cardsString = "";

// Ask the user for info on an engineer team member
const askforEngineerInfo = () => {
    return inquirer
        .prompt(engineerQuestions)
        .then((engineerAnswers) => {

            // Add an engineer object to team members array
            teamMembers.push(new Engineer(engineerAnswers));

            return askforNextTeamMember();
        });
}

// Ask the user for info on an intern team member
const askforInternInfo = () => {
    return inquirer
        .prompt(internQuestions)
        .then((internAnswers) => {

            // Add an intern object to team members array
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

// Read the file containing the beginning of the HTML code block
const renderHTMLStart = () => {
    return fs.readFileSync("./src/start.html", "utf8", (err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        return data;
    });
}

// Read the file containing the HTML code to define an employee card specified by the 'type' passed in
const readCard = (type) => {
    return fs.readFileSync(`./src/${type}Card.html`, "utf8", (err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        return data;
    });
}

// Replace the identifying string in the HTML with the data point from the object
const replaceDataValues = (obj, string) => {
    string = string.replace("[NAME]", obj.getName());
    string = string.replace("[IDNUMBER]", obj.getId());
    string = string.replace("[EMAIL]", obj.getEmail());
    string = string.replace("[EMAIL]", obj.getEmail());
    return string;
}

// Process each object stored in 'teamMembers' array into a single HTML string with card data
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

// Read the file containing the ending of the HTML code block
const renderHTMLEnd = () => {
    return fs.readFileSync("./src/end.html", "utf8", (err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        return data;
    });
}

// Generate one string of HTML to be sent back to 'writeToFile'
const generateHTML = () => {
    return renderHTMLStart() +
        renderHTMLCards() +
        renderHTMLEnd();
}

// Generate one string of CSS to be sent back to 'writeToFile'
const generateCSS = () => {
    return fs.readFileSync("./src/style.css", "utf8", (err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        return data;
    });
}

// Create a new file saved to /dist folder
const writeToFile = (fileName, string) => {
    fs.writeFile(`./dist/${fileName}`, string, (err) => err ? console.error(err) : console.log('Success!'));
}

// Initialize the question process
const init = () => {
    inquirer
        .prompt(managerQuestions)
        .then((managerAnswers) => {

            // Add a manager object to team members array
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
}

init();