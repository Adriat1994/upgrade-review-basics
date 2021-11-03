function rollDice(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(rollDice(0, 16));