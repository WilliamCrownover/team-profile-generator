const Intern = require("../lib/Intern");

describe("Intern class", () => {
    describe("Constructor", () => {
        it("Should create an object with 'name', 'id', 'email', and 'school' properties set to the properties provided by an object", () => {
            const intern = {
                name: "employeeName",
                id: 1,
                email: "email@email.com",
                school: "schoolName"
            }
            const obj = new Intern(intern);

            expect(obj.name).toEqual(intern.name);
            expect(obj.id).toEqual(intern.id);
            expect(obj.email).toEqual(intern.email);
            expect(obj.school).toEqual(intern.school);
        });
    });

    describe("getSchool", () => {
        it("Should return the school name of the intern", () => {
            const intern = {
                name: "employeeName",
                id: 1,
                email: "email@email.com",
                school: "schoolName"
            }
            const obj = new Intern(intern);

            expect(obj.getSchool()).toEqual(intern.school);
        });
    });

    describe("getRole", () => {
        it("Should return the role of the employee", () => {
            const intern = {
                name: "employeeName",
                id: 1,
                email: "email@email.com",
                school: "schoolName"
            }
            const obj = new Intern(intern);

            expect(obj.getRole()).toEqual("Intern");
        });
    });
});
