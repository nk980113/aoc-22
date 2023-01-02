// Answer from https://discord.com/channels/222078108977594368/1052815279970857031/1052828411065806968 in discord.js server
const input = `Sensor at x=2924811, y=3544081: closest beacon is at x=3281893, y=3687621
Sensor at x=2719183, y=2520103: closest beacon is at x=2872326, y=2415450
Sensor at x=3754787, y=3322726: closest beacon is at x=3281893, y=3687621
Sensor at x=1727202, y=1485124: closest beacon is at x=1329230, y=1133797
Sensor at x=2517008, y=2991710: closest beacon is at x=2454257, y=2594911
Sensor at x=1472321, y=3123671: closest beacon is at x=2216279, y=3414523
Sensor at x=3456453, y=3959037: closest beacon is at x=3281893, y=3687621
Sensor at x=3997648, y=2624215: closest beacon is at x=4401794, y=2000000
Sensor at x=463281, y=967584: closest beacon is at x=1329230, y=1133797
Sensor at x=2395529, y=1897869: closest beacon is at x=2454257, y=2594911
Sensor at x=3094466, y=3888307: closest beacon is at x=3281893, y=3687621
Sensor at x=2737812, y=3928154: closest beacon is at x=2744537, y=4159197
Sensor at x=813538, y=3874308: closest beacon is at x=2216279, y=3414523
Sensor at x=822358, y=1997263: closest beacon is at x=1329230, y=1133797
Sensor at x=3993754, y=3951321: closest beacon is at x=3281893, y=3687621
Sensor at x=2585409, y=3541887: closest beacon is at x=2216279, y=3414523
Sensor at x=3269796, y=3730504: closest beacon is at x=3281893, y=3687621
Sensor at x=3075750, y=2873879: closest beacon is at x=2872326, y=2415450
Sensor at x=1357, y=2747918: closest beacon is at x=-1077481, y=3057204
Sensor at x=2256257, y=344800: closest beacon is at x=1854450, y=-900998
Sensor at x=2779742, y=2308087: closest beacon is at x=2872326, y=2415450
Sensor at x=867692, y=64146: closest beacon is at x=1329230, y=1133797
Sensor at x=3454465, y=966419: closest beacon is at x=4401794, y=2000000
Sensor at x=1902550, y=2398376: closest beacon is at x=2454257, y=2594911`;

function main() {
    const sensors = parseSensors(input);
    const fixedSensor = sensors.shift();
    const fixedSensorPosition = fixedSensor.sensor;
    const bound = 4_000_000;
    let answer;
    for (let dist = fixedSensor.minDist + 1; ; dist++) {
        const positions = positionsAt(fixedSensorPosition, dist);
        const possiblePositions = positions.filter((p) => sensors.every((s) => manhattanDistance(s.sensor, p) > s.minDist));
        const inboundPossiblePositions = possiblePositions.filter((p) => p[0] >= 0 && p[0] <= bound && p[1] >= 0 && p[1] <= bound);
        if (inboundPossiblePositions.length) {
            answer = inboundPossiblePositions[0];
            break;
        }
    }
    console.log(answer[0] * 4_000_000 + answer[1]);
}

/**
 * 
 * @param {string} input 
 */
function parseSensors(input) {
    const rawSensors = input.split('\n');
    return rawSensors.map((line) => {
        const parts = line.split(': closest beacon is at ');
        const sensor = parseCoordinates(parts[0].slice(10));
        const closestBeacon = parseCoordinates(parts[1]);
        const minDist = manhattanDistance(sensor, closestBeacon);
        return { sensor, minDist };
    });
}

/**
 * 
 * @param {`x=${number}, y=${number}`} data
 * @returns {[number, number]}
 */
function parseCoordinates(data) {
    const parts = data.split(', y=');
    const x = parseInt(parts[0].slice(2));
    const y = parseInt(parts[1]);
    return [x, y];
}

/**
 * 
 * @param {[number, number]} a 
 * @param {[number, number]} b 
 */
function manhattanDistance(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

/**
 * 
 * @param {[number, number]} sensor 
 * @param {number} distance 
 */
function positionsAt(sensor, distance) {
    const returnVal = [];
    const [x, y] = sensor;
    for (let i = 0; i < distance; i++) {
        returnVal.push([x - distance + i, y + i]);
        returnVal.push([x + i, y + distance - i]);
        returnVal.push([x + distance - i, y - i]);
        returnVal.push([x - i, y - distance + i]);
    }
    return returnVal;
}

console.time('');
main();
console.timeEnd('');