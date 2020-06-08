function isFullHouse(hand) {
    let arr = hand.sort((a, b) => {
        return a + b;
    });
    let firCase = [];
    arr.map(x => {
        if (arr.indexOf(x) == 0) {
            firCase.push(x);
        }
    });
    if (firCase.length == 3) {
        return true;
    } else {
        return false;
    }
}

console.log(isFullHouse(["A", "A", "A", "K", "K"])); // ➞ true
console.log(isFullHouse(["3", "J", "J", "3", "3"])); // ➞ true
console.log(isFullHouse(["10", "J", "10", "10", "10"])); // ➞ false
console.log(isFullHouse(["7", "J", "3", "4", "2"])); // ➞ false