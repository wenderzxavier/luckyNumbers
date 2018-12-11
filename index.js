const readline = require('readline');
const games = require('./games');
const input = require('./input');

let numGames = 0;
let numsToPlay = 0;
let minRange = 0;
let maxRange = 0;

const keyboard = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const checkValues = () => {
    if (input.isGameValid(numGames)) {
        if (input.isValidLuckyNumbers(numsToPlay)) {
            if (input.isValidRange(minRange, maxRange)) {
                return true;
            }
        }
    }
    return false;
}

console.log("$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ ");
console.log("$ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ $");
console.log("$ $$$$$$$$$$ WELCOME TO THE LOTTERY GAMES GENERATOR!!! $$$$$$$$$$$$$ $");
console.log("$ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ $");
console.log("$ $$$$$$$$$$$$$ YOUR LUCKY IS A FEW TYPES AWAY $$$$$$$$$$$$$$$$$$$$$ $");
console.log("$ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ $");
console.log("$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ ");
console.log();

const question1 = () => {
    return new Promise((resolve, reject) => {
        keyboard.question('How many Games do you want to generate? ', (answer) => {
            numGames = answer
            console.log(`Ok!, you want me to generate ${answer}\n`);
            resolve();
        });
    });
};

const question2 = () => {
    return new Promise((resolve, reject) => {
        keyboard.question('How many numbers do you want to play on each game? ', (answer) => {
            numsToPlay = answer
            console.log(`Great! ${numsToPlay} on each game! We are almost done.\n`);
            resolve();
        });
    });
};

const question3 = () => {
    return new Promise((resolve, reject) => {
        keyboard.question('What is the lowest number accepted on the lottery game? ', (answer) => {
            minRange = parseInt(answer);
            resolve();
        });
    });
};


const question4 = () => {
    return new Promise((resolve, reject) => {
        keyboard.question('\nAnd the highest? \n', (answer) => {
            maxRange = parseInt(answer);
            resolve();
        });
    });
};


const main = async () => {
    await question1();
    await question2();
    await question3();
    await question4();
    console.log();
    console.log(`We are generating ${numGames} game(s) with ${numsToPlay} number(s) on each, varying from ${minRange} to ${maxRange}...`);
    console.log();

    if (checkValues()) {
        console.log("THIS ARE YOUR LUCKY NUMBERS:");
        for (let i=0; i < numGames; i++) {
            let game = games.getMyLuckyNumbers(numsToPlay, minRange, maxRange);
            console.log(game);
        }
        console.log("Good Luck!");
    }
    keyboard.close();
}


main();