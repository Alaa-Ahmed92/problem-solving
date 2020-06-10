function decision(hand, face) {

    let cutWordStr = face.replace(/[0-9]/g, '');
    let cutNumStr = face.replace(/[A-Z]/gi, '');
    let strResult = '';

    hand.map(x => {
        if (x.includes(cutWordStr) || x.includes(cutNumStr)) {
            hand.splice(hand.indexOf(x), 1);
            if (hand.length == 1) {
                strResult = 'Uno!';
            } else if (hand.length == 0) {
                strResult = 'You won!';
            } else {
                strResult = 'Keep going...';
            }
        } else {
            if (hand.length == 1) {
                strResult = 'Uno!';
            }
        }
    });

    return strResult;

}


console.log(decision(['yellow 3', 'red 3'], 'red 10')); // ➞ "Uno!"
console.log(decision(['blue 1'], 'blue 5')); // ➞ "You won!"
console.log(decision(['red 1'], 'blue 5')); // ➞ "Uno!"
console.log(decision(['red 1', 'blue 10'], 'blue 5')); // ➞ "Uno!"
console.log(decision(['red 1', 'blue 10', 'green 7'], 'blue 5')); // ➞ "Keep going..."
console.log(decision(['red 1', 'green 7'], 'green 2')); // ➞ "Uno!"
console.log(decision(['green 7'], 'green 2')); // ➞ "You won!"
console.log(decision(['blue 7'], 'green 7')); // ➞ "You won!"
console.log(decision(['blue 1', 'green 2', 'yellow 4', 'red 2'], 'blue 5')); // ➞ "Keep going..."



