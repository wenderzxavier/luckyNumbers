module.exports = {
    getMyLuckyNumbers: (numsToPlay, minRange, maxRange) => {
        let luckyNumbers = new Set();
        for (let i = 0; i < numsToPlay; i++) {
            let pickedNumber = Math.floor(Math.random() * maxRange) + minRange;
            while(luckyNumbers.has(pickedNumber)){
                pickedNumber = Math.floor(Math.random() * maxRange) + minRange;
            }
            luckyNumbers.add(pickedNumber);
        }
        return luckyNumbers;
    }
}