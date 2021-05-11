const { it, expect, test } = require("@jest/globals")
const { describe, string } = require("yargs")
const Engineer = require("../lib/manager")

test("Engineer Class", () => {
    describe("Object Define Test", () => {
        it("Defintion Test", () => {
            const engineer = new Engineer("Casey", 456, "cool@email.com", "github_Engineer")
            expect(engineer.github).toEqual("github_Engineer")
        })
    })
})