module.exports = {
    isGameValid : (numGames) => {
        return numGames >= 0 ? true : false;
    },

    isValidLuckyNumbers: (luckyNumbers) => {
        return luckyNumbers > 0 ? true : false; 
    },

    checkRange: (numsToGenerate) => {
        return numsToGenerate >= 0 ? true : false;
    },

    isValidRange: (lower, upper) => {
        return lower > upper ? false :
            upper < 0 ? false : 
                lower < 0 ? false : true;
    }
}