const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    describe("Constructor", () => {
        it("Should create an object with 'name', 'id', 'email', and 'github' properties set to the arguments provided", () => {
            const name = "employeeName";
            const id = 1;
            const email = "email@email.com";
            const github = "githubName"
            const obj = new Engineer(name, id, email, github);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);
        });
    });

    describe("getGithub", () => {
        it("Should return the github username of the engineer", () => {
            const name = "employeeName";
            const id = 1;
            const email = "email@email.com";
            const github = "githubName"
            const obj = new Engineer(name, id, email, github);

            expect(obj.getGithub()).toEqual(github);
        });
    });

    describe("getRole", () => {
        it("Should return the role of the employee", () => {
            const name = "employeeName";
            const id = 1;
            const email = "email@email.com";
            const github = "githubName"
            const obj = new Engineer(name, id, email, github);

            expect(obj.getRole()).toEqual("Engineer");
        });
    });
});
