const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("Constructor", () => {
        it("Should create an object with 'name', 'id', and 'email' properties set to the arguments provided", () => {
            const name = "employeeName";
            const id = 1;
            const email = "email@email.com";
            const obj = new Employee(name, id, email);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        });
    });

    describe("getName", () => {
        it("Should return the name of the employee", () => {
            const name = "employeeName";
            const id = 1;
            const email = "email@email.com";
            const obj = new Employee(name, id, email);

            expect(obj.getName()).toEqual(name);
        });
    });

    describe("getId", () => {
        it("Should return the id of the employee", () => {
            const name = "employeeName";
            const id = 1;
            const email = "email@email.com";
            const obj = new Employee(name, id, email);

            expect(obj.getId()).toEqual(id);
        });
    });

    describe("getEmail", () => {
        it("Should return the email of the employee", () => {
            const name = "employeeName";
            const id = 1;
            const email = "email@email.com";
            const obj = new Employee(name, id, email);

            expect(obj.getEmail()).toEqual(email);
        });
    });

    describe("getRole", () => {
        it("Should return the role of the employee", () => {
            const name = "employeeName";
            const id = 1;
            const email = "email@email.com";
            const obj = new Employee(name, id, email);

            expect(obj.getRole()).toEqual("Employee");
        });
    });
});