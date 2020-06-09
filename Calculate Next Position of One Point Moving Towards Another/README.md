# Calculate Next Position of One Point Moving Towards Another (Games) [Hard]

`games`  `algebra` `objects` `math`

A point on the screen (pt1) wants to move a certain distance (dist) closer to another point on the screen (pt2) The function has three arguments, two of which are objects with x & y values, and the third being the distance, e.g. `{x:50, y:60}, {x: 100, y: 100}, 10`. The expected result is a similar object with the new co-ordinate.

### Examples

<pre>
getNextPosition({x: 50, y: 60}, {x: 100, y: 100}, 10) ➞ {x: 58, y: 66}
getNextPosition({x: 0, y: 0}, {x: 100, y: 0}, 10) ➞ {x: 10, y: 0}
getNextPosition({x: 0, y: 0}, {x: 100, y: 100}, 10) ➞ {x: 7, y: 7}
getNextPosition({x: 250, y: 10}, {x: -20, y: 35}, 55) ➞ {x: 195, y: 15}
</pre>

### Notes
- The returned x & y values should be rounded to the closest integer
- If the distance between the two points is less than distance wanting to be traveled, then the returned co-ordinate should overshoot the mark, e.g. `{x: 50, y: 0}, {x: 70, y: 0}, 30) ➞ {x: 80, y: 0}`.