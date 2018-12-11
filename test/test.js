const games = require('../games');
const input = require('../input');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Games', () => {
    it('should have a positive number of games', () => {
        const solution = input.isGameValid(3);
        const expected = true;

        assert.equal(expected, solution);
    });

    it('should return false when negative value of games', () => {
        const solution = input.isGameValid(-1);
        const expected = false;

        assert.equal(expected, solution);
    });

    it('should return true if 0 games is requested', () => {
        const solution = input.isGameValid(0);
        const expected = true;

        assert.equal(expected, solution);
    })

    it('should have lucky numbers to generate higher than 0', () => {
        const solution = input.isValidLuckyNumbers(1);
        const expected = true;

        assert.equal(expected, solution);
    });

    it('should return false when numbers are 0 or lower', () => {
        const solution = input.isValidLuckyNumbers(0);
        const expected = false;

        assert.equal(expected, solution);
    });
});

describe('Lucky Numbers', () => {
    it('should be positive', () => {
        const solution = input.checkRange(3);
        const expected = true;

        assert.equal(solution, expected);
    });

    it('should not accept negative numbers', () => {
        const solution = input.checkRange(-1);
        const expected = false;

        assert.equal(solution, expected);
    });
    
    it('should contain a valid range', () => {
        const solution = input.isValidRange(2, 3);
        const expected = true;

        assert.equal(solution, expected)
    });
});

describe('Generate Your Lucky Numbers', () => {
    it('should generate a set with size equals the number to play on the lottery', () => {
        let minRange = 1;
        let maxRange = 10;
        let numsToPlay = 3;
        const expected = 3;

        let lotteryNumber = games.getMyLuckyNumbers(numsToPlay, minRange, maxRange);
        const solution = lotteryNumber.size;

        assert.equal(expected, solution);        
    });

    it('should be integers', () => {
        let minRange = 1;
        let numsToPlay = 1;
        let maxRange = 10;

        const lotteryNumber = games.getMyLuckyNumbers(numsToPlay, minRange, maxRange);
        const solution = lotteryNumber;

        assert.isNotNaN(solution);
    });

    it('should be within range', () => {
        let minRange = 1;
        let numsToPlay = 1;
        let maxRange = 10;

        let lotteryNumbers = games.getMyLuckyNumbers(numsToPlay, minRange, maxRange);
        const solution = lotteryNumbers.values().next().value;

        expect(solution).to.be.within(minRange, maxRange);
    });

    it('should generate lucky numbers considering upper or lower values', () => {
        let minRange = 0;
        let maxRange = 0;
        let numsToPlay = 1;

        let lotteryNumbers = games.getMyLuckyNumbers(numsToPlay, minRange, maxRange);
        const solution = lotteryNumbers.values().next().value;

        const expected = 0;

        assert.equal(solution, expected);
    });

});
