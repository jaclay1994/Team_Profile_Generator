const { it, expect, test } = require("@jest/globals")
const { describe, string } = require("yargs")
const Manager = require("../lib/manager")

test("Manager Class", () => {
    describe("Object Define Test", () => {
        it("Defintion Test", () => {
            const manager = new Manager("Tom", 2, "manager@email.com", 123)
            expect(manager.officeNumber).toEqual(123)
        })
    })
})
