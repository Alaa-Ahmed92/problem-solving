function getNextPosition(pt1, pt2, dist) {

    let newPos = {};
    let vectX = pt2.x - pt1.x;
    let vectY = pt2.y - pt1.y;

    // The distance between Start and End point
    let orgD = Math.sqrt(Math.pow((pt2.x - pt1.x), 2) + Math.pow((pt2.y - pt1.y), 2));

    let ptTargetX = Math.round(pt1.x + ((dist / orgD) * vectX));
    let ptTargetY = Math.round(pt1.y + ((dist / orgD) * vectY));

    newPos.x = ptTargetX;
    newPos.y = ptTargetY;

    return newPos;
}

console.log(getNextPosition({ x: 50, y: 60 }, { x: 100, y: 100 }, 10)); // ➞ {x: 58, y: 66}
console.log(getNextPosition({ x: 0, y: 0 }, { x: 100, y: 0 }, 10)); // ➞ {x: 10, y: 0}
console.log(getNextPosition({ x: 0, y: 0 }, { x: 100, y: 100 }, 10)); // ➞ {x: 7, y: 7}
console.log(getNextPosition({ x: 250, y: 10 }, { x: -20, y: 35 }, 55)); // ➞ {x: 195, y: 15}
