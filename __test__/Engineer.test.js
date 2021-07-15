const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    describe("Constructor", () => {
        it("Should create an object with 'name', 'id', 'email', and 'github' properties set to the properties provided by an object", () => {
            const engineer = {
                name: "employeeName",
                id: 1,
                email: "email@email.com",
                github: "githubName"
            }
            const obj = new Engineer(engineer);

            expect(obj.name).toEqual(engineer.name);
            expect(obj.id).toEqual(engineer.id);
            expect(obj.email).toEqual(engineer.email);
            expect(obj.github).toEqual(engineer.github);
        });
    });

    describe("getGithub", () => {
        it("Should return the github username of the engineer", () => {
            const engineer = {
                name: "employeeName",
                id: 1,
                email: "email@email.com",
                github: "githubName"
            }
            const obj = new Engineer(engineer);

            expect(obj.getGithub()).toEqual(engineer.github);
        });
    });

    describe("getRole", () => {
        it("Should return the role of the employee", () => {
            const engineer = {
                name: "employeeName",
                id: 1,
                email: "email@email.com",
                github: "githubName"
            }
            const obj = new Engineer(engineer);

            expect(obj.getRole()).toEqual("Engineer");
        });
    });
});
