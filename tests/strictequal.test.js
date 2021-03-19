const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require("../strictequal")

describe('strictEqual', () => {
    it('should return true if the numbers are the same type and value', () => {
        let a = 10
        let b = 10
        const testData = strictEqual(a, b)
        expect(testData).to.be.true
    })
    it('should return false if the numbers are not the same type', () => {
        let a = '10'
        let b = 10
        const testData = strictEqual(a, b)
        expect(testData).to.be.false
    })
    it('should return false if the numbers are not the same value', () => {
        let a = 9
        let b = 10
        const testData = strictEqual(a, b)
        expect(testData).to.be.false
    })
    it('should return false if the numbers are not the same type or value', () => {
        let a = '9'
        let b = 10
        const testData = strictEqual(a, b)
        expect(testData).to.be.false
    })
})