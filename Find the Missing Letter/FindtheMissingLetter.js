function missingLetter(arr) {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let newLowerStr = lower.substring(lower.indexOf(arr[0]), lower.indexOf(arr[0]) + arr.length + 1).split('');
    let newUpperStr = UPPER.substring(UPPER.indexOf(arr[0]), UPPER.indexOf(arr[0]) + arr.length + 1).split('');
    let missLett = '';

    for (let i = 0; i < arr.length; i++) {
        if (lower.indexOf(arr[i]) !== -1) {
            if (arr.indexOf(newLowerStr[i]) == -1) {
                missLett = newLowerStr[i];
            }
        }
        if (UPPER.indexOf(arr[i]) !== -1) {
            if (arr.indexOf(newUpperStr[i]) == -1) {
                missLett = newUpperStr[i];
            }
        }
    }
    return missLett;

}

console.log(missingLetter(["a", "b", "c", "e", "f", "g"])); // ➞ "d"
console.log(missingLetter(["O", "Q", "R", "S"])); // ➞ "P"
console.log(missingLetter(["t", "u", "v", "w", "x", "z"])); // ➞ "y"
console.log(missingLetter(["m", "o"])); // ➞ "n"





