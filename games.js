module.exports = {
    getMyLuckyNumbers: (numsToPlay, minRange, maxRange) => {
        let pickedNumber;
        let luckyNumbers = new Set();
        for (let i = 0; i < numsToPlay; i++) {
            pickedNumber = Math.floor(Math.random() * (maxRange - minRange + 1));
            while (luckyNumbers.has(pickedNumber)) {
                pickedNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
            }
            luckyNumbers.add(pickedNumber);
        }
        return luckyNumbers;
    }
}