const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Games', () => {
    it('should have a positive number of games', () => {
        const solution = isGameValid(3);
        const expected = true;

        assert.equal(expected, solution);
    });

    it('should return false when negative value of games', () => {
        const solution = isGameValid(-1);
        const expected = false;

        assert.equal(expected, solution);
    });

    it('should return true if 0 games is requested', () => {
        const solution = isGameValid(0);
        const expected = true;

        assert.equal(expected, solution);
    })

    it('should have lucky numbers to generate higher than 0', () => {
        const solution = isValidLuckyNumbers(1);
        const expected = true;

        assert.equal(expected, solution);
    });

    it('should return false when numbers are 0 or lower', () => {
        const solution = isValidLuckyNumbers(0);
        const expected = false;

        assert.equal(expected, solution);
    });
});

describe('Lucky Numbers', () => {
    it('should be positive', () => {
        const solution = checkRange(3);
        const expected = true;

        assert.equal(solution, expected);
    });

    it('should not accept negative numbers', () => {
        const solution = checkRange(-1);
        const expected = false;

        assert.equal(solution, expected);
    });
    
    it('should contain a valid range', () => {
        const solution = isValidRange(2, 3);
        const expected = true;

        assert.equal(solution, expected)
    });
});

describe('Generate Your Lucky Numbers', () => {
    it('should be integers', () => {
        const solution = getMyLuckyNumber(1,3);

        assert.isNotNaN(solution);
    });

    it('should be within range', () => {
        let minRange = 1;
        let maxRange = 10;

        const solution = getMyLuckyNumber(minRange, maxRange);
        
        expect(solution).to.be.within(minRange, maxRange);
    });

    it('should accept lower or upper bound value', () => {
        let minRange = 0;
        let maxRange = 0;

        const solution = getMyLuckyNumber(minRange, maxRange);
        const expected = 0;

        assert.equal(solution, expected);
    });

});
