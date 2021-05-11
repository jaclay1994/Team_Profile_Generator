const { it, expect } = require("@jest/globals")
const { describe, string } = require("yargs")
const Employee = require("../lib/manager")

test("Employee Class", () => {
    describe("Object Define Test", () => {
        it("Defintion Test", () => {
            const employee = new Employee("Anna", 789, "employ@email.com")
            expect(employee.name).toEqual("Anna")
        })
    })
})
