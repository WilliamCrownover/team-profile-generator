const Manager = require("../lib/Manager");

describe("Manager class", () => {
    describe("Constructor", () => {
        it("Should create an object with 'name', 'id', 'email', and 'officeNumber' properties set to the arguments provided", () => {
            const name = "employeeName";
            const id = 1;
            const email = "email@email.com";
            const officeNumber = 1
            const obj = new Manager(name, id, email, officeNumber);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(officeNumber);
        });
    });

    describe("getOfficeNumber", () => {
        it("Should return the office number of the manager", () => {
            const name = "employeeName";
            const id = 1;
            const email = "email@email.com";
            const officeNumber = 1
            const obj = new Manager(name, id, email, officeNumber);

            expect(obj.getOfficeNumber()).toEqual(officeNumber);
        });
    });

    describe("getRole", () => {
        it("Should return the role of the employee", () => {
            const name = "employeeName";
            const id = 1;
            const email = "email@email.com";
            const officeNumber = 1
            const obj = new Manager(name, id, email, officeNumber);

            expect(obj.getRole()).toEqual("Manager");
        });
    });
});
