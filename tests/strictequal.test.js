const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require("../strictequal")

describe('Strict Equal Function', () => {
    it('returns true if the values provided are strictly equal to each other', () => {
        // set up test data
        let a = 10
        let b = 10

        //call the function from our outside file
        strictEqual(a, b)

        // assert what should be true
        expect(a).to.equal(b)
    })
})