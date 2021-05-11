const { it, expect, test } = require("@jest/globals")
const { describe, string } = require("yargs")
const Intern = require("../lib/intern")

test("Intern Class", () => {
    describe("Object Define Test", () => {
        it("Defintion Test", () => {
            const intern = new Intern("Paul", 2, "who@email.com", "SchoolofCode")
            expect(intern.school).toEqual("SchoolofCode")
        })
    })
})