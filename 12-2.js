// Use BFS, see https://en.wikipedia.org/wiki/Breadth-first_search
const input = `abccccccccccccccccccaaaaaaaaacccccccccccccccccccccccccccccccccccccaaaa
abcccccccccccccccaaaaaaaaaaacccccccccccccccccccccccccccccccccccccaaaaa
abcaaccaacccccccccaaaaaaaaaacccccccccccccccccccccaaacccccccccccccaaaaa
abcaaaaaaccccccccaaaaaaaaaaaaacccccccccccccccccccaacccccccccccccaaaaaa
abcaaaaaacccaaacccccaaaaaaaaaaaccccccccccccccccccaaaccccccccccccccccaa
abaaaaaaacccaaaaccccaaaaaacaaaacccccccccccaaaacjjjacccccccccccccccccca
abaaaaaaaaccaaaaccccaaaaaaccccccaccccccccccaajjjjjkkcccccccccccccccccc
abaaaaaaaaccaaacccccccaaaccccccaaccccccccccajjjjjjkkkaaacccaaaccaccccc
abccaaacccccccccccccccaaccccaaaaaaaacccccccjjjjoookkkkaacccaaaaaaccccc
abcccaacccccccccccccccccccccaaaaaaaaccccccjjjjoooookkkkcccccaaaaaccccc
abcccccccaacccccccccccccccccccaaaacccccccijjjoooooookkkkccaaaaaaaccccc
abccaaccaaaccccccccccccccccccaaaaacccccciijjooouuuoppkkkkkaaaaaaaacccc
abccaaaaaaaccccccccccaaaaacccaacaaaccciiiiiooouuuuupppkkklllaaaaaacccc
abccaaaaaacccccccccccaaaaacccacccaaciiiiiiqooouuuuuupppkllllllacaccccc
abcccaaaaaaaacccccccaaaaaaccccaacaiiiiiqqqqoouuuxuuupppppplllllccccccc
abccaaaaaaaaaccaaaccaaaaaaccccaaaaiiiiqqqqqqttuxxxuuuppppppplllccccccc
abccaaaaaaaacccaaaaaaaaaaacccaaaahiiiqqqttttttuxxxxuuuvvpppplllccccccc
abcaaaaaaacccaaaaaaaaaaacccccaaaahhhqqqqtttttttxxxxuuvvvvvqqlllccccccc
abcccccaaaccaaaaaaaaaccccccccacaahhhqqqttttxxxxxxxyyyyyvvvqqlllccccccc
abcccccaaaccaaaaaaaacccccccccccaahhhqqqtttxxxxxxxyyyyyyvvqqqlllccccccc
SbcccccccccccaaaaaaaaaccccccccccchhhqqqtttxxxxEzzzyyyyvvvqqqmmlccccccc
abcccccccccccaaaaaaaacccaacccccccchhhppptttxxxxyyyyyvvvvqqqmmmcccccccc
abccccccccccaaaaaaaaaaccaacccccccchhhpppptttsxxyyyyyvvvqqqmmmccccccccc
abcaacccccccaaaaaaacaaaaaaccccccccchhhppppsswwyyyyyyyvvqqmmmmccccccccc
abaaaacccccccaccaaaccaaaaaaacccccccchhhpppsswwyywwyyyvvqqmmmddcccccccc
abaaaaccccccccccaaaccaaaaaaacccccccchhhpppsswwwwwwwwwvvqqqmmdddccccccc
abaaaacccccccccaaaccaaaaaaccccccccccgggpppsswwwwrrwwwwvrqqmmdddccccccc
abccccccaaaaaccaaaacaaaaaaccccccaacccggpppssswwsrrrwwwvrrqmmdddacccccc
abccccccaaaaaccaaaacccccaaccccaaaaaacggpppssssssrrrrrrrrrnmmdddaaccccc
abcccccaaaaaaccaaaccccccccccccaaaaaacggppossssssoorrrrrrrnnmdddacccccc
abcccccaaaaaaccccccccaaaaccccccaaaaacgggoooossoooonnnrrnnnnmddaaaacccc
abccccccaaaaaccccccccaaaacccccaaaaaccgggoooooooooonnnnnnnnndddaaaacccc
abccccccaaaccccccccccaaaacccccaaaaacccgggoooooooffennnnnnnedddaaaacccc
abcccccccccccccccccccaaacccccccaacccccggggffffffffeeeeeeeeeedaaacccccc
abccccccccccccccccccaaacccccaccaaccccccggfffffffffeeeeeeeeeecaaacccccc
abccccccccccccccccccaaaacccaaaaaaaaaccccfffffffaaaaaeeeeeecccccccccccc
abccccccccaacaaccccaaaaaacaaaaaaaaaaccccccccccaaaccaaaaccccccccccccccc
abccccccccaaaaacccaaaaaaaaaaacaaaaccccccccccccaaaccccaaccccccccccaaaca
abcccccccaaaaaccccaaaaaaaaaaacaaaaacccccccccccaaaccccccccccccccccaaaaa
abcccccccaaaaaacccaaaaaaaaaacaaaaaacccccccccccaaccccccccccccccccccaaaa
abcccccccccaaaaccaaaaaaaaaaaaaaccaaccccccccccccccccccccccccccccccaaaaa`;

/**
 * @typedef {object} Coordinates
 * @property {number} x
 * @property {number} y
 * @property {number} elevation
 * @property {boolean} explored
 * @property {Coordinates} [parent]
 */

function main() {
    const map = makeMap(input);
    const elevationTable = makeElevationTable(map);

    /** @type {{ [x: number]: { [y: number]: Coordinates } }} */
    const coordinatesTable = {};

    /**
     * 
     * @param {number} x
     * @param {number} y 
     * @returns {Coordinates}
     */
    function coordinates(x, y) {
        if (!coordinatesTable[x]) coordinatesTable[x] = {};
        if (!coordinatesTable[x][y]) coordinatesTable[x][y] = {
            x,
            y,
            elevation: elevationTable[x][y],
            explored: false,
        };
        return coordinatesTable[x][y];
    }

    const end = coordinates(
        map.indexOf(map.find((l) => l.includes('E'))),
        map.find((l) => l.includes('E')).indexOf('E'),
    );

    /**
     * 
     * @param {Coordinates} targetCoordinates 
     * @param {number} width 
     * @param {number} height
     * @returns {Coordinates[]}
     */
    function coordinatesAround(targetCoordinates, width = map[0].length, height = map.length) {
        const { x, y, elevation } = targetCoordinates;
        const unfilteredReturnVal = [];
        for (const [newX, newY] of [
            [x - 1, y],
            [x + 1, y],
            [x, y - 1],
            [x, y + 1],
        ]) {
            try {
                unfilteredReturnVal.push(coordinates(newX, newY));
            } catch {
                // noop
            }
        }
        return unfilteredReturnVal.filter(({ elevation: newElevation }) => newElevation - elevation <= 1);
    }

    // procedure BFS(G, root) is
    // let Q be a queue
    /** @type {Coordinates[]} */
    const targetPoints = [];

    // label root as explored
    let roots = map.map((arr, x) => arr.map((_, y) => coordinates(x, y)).filter((p) => p.elevation === 0)).flat();
    roots.forEach((r) => r.explored = true);

    // Q.enqueue(root)
    targetPoints.push(...roots);

    // while Q is not empty do
    while (targetPoints.length > 0) {
        // v := Q.dequeue()
        const point = targetPoints.shift();

        // if v is the goal then
        if (point === end) {
            // return v
            break;
        }

        // for all edges from v to w in G.adjacentEdges(v) do
        for (const nextPoint of coordinatesAround(point)) {
            // if w is not labeled as explored then
            if (!nextPoint.explored) {
                // label w as explored
                nextPoint.explored = true;

                // w.parent := v
                nextPoint.parent = point;

                // Q.enqueue(w)
                targetPoints.push(nextPoint);
            }
        }
    }

    let counter = 0;
    let parent = end;
    while (true) {
        if (parent.parent) {
            counter++;
            parent = parent.parent;
        } else break;
    }
    console.log(counter);
}

/**
 * 
 * @param {string} input
 */
function makeMap(input) {
    return input.split('\n').map((l) => l.split(''));
}

/**
 * 
 * @param {string[][]} map 
 */
function makeElevationTable(map) {
    return map.map((l) => l.map(toElevation));
}

function toElevation(char) {
    if (char === 'S') return 0;
    if (char === 'E') return 25;
    return 'abcdefghijklmnopqrstuvwxyz'.indexOf(char);
}

console.time('');
main();
console.timeEnd('');