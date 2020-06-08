/*

1 (E)	329.63 Hz	E4
2 (B)	246.94 Hz	B3
3 (G)	196.00 Hz	G3
4 (D)	146.83 Hz	D3
5 (A)	110.00 Hz	A2
6 (E)	82.41 Hz	E2

*/

function fretFreq(gStr, fret) {
    let arr = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];
    let result = (arr[gStr - 1] * Math.pow(2, (fret / 12)));
    if (result % 1 === 0) {
        return result;
    } else if (result % 1 !== 0 || result.toString().includes(00)) {
        return parseFloat(result.toFixed(2));
    } else {
        return parseInt(result.toFixed(0));
    }
}


console.log(fretFreq(5, 12)) // ➞ 220
console.log(fretFreq(4, 6)) // ➞ 207.65
console.log(fretFreq(2, 23)) // ➞ 932.32
console.log(fretFreq(6, 14)) // ➞ 185
console.log(fretFreq(1, 2)) // ➞ 370