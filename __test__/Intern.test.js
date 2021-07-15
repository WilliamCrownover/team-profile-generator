const Intern = require("../lib/Intern");

describe("Intern class", () => {
    describe("Constructor", () => {
        it("Should create an object with 'name', 'id', 'email', and 'school' properties set to the arguments provided", () => {
            const name = "employeeName";
            const id = 1;
            const email = "email@email.com";
            const school = "schoolName"
            const obj = new Intern(name, id, email, school);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);
        });
    });

    describe("getSchool", () => {
        it("Should return the school name of the intern", () => {
            const name = "employeeName";
            const id = 1;
            const email = "email@email.com";
            const school = "schoolName"
            const obj = new Intern(name, id, email, school);

            expect(obj.getSchool()).toEqual(school);
        });
    });

    describe("getRole", () => {
        it("Should return the role of the employee", () => {
            const name = "employeeName";
            const id = 1;
            const email = "email@email.com";
            const school = "schoolName"
            const obj = new Intern(name, id, email, school);

            expect(obj.getRole()).toEqual("Intern");
        });
    });
});
