// Looks like a tough one

const input = `                [B] [L]     [J]    
            [B] [Q] [R]     [D] [T]
            [G] [H] [H] [M] [N] [F]
        [J] [N] [D] [F] [J] [H] [B]
    [Q] [F] [W] [S] [V] [N] [F] [N]
[W] [N] [H] [M] [L] [B] [R] [T] [Q]
[L] [T] [C] [R] [R] [J] [W] [Z] [L]
[S] [J] [S] [T] [T] [M] [D] [B] [H]
 1   2   3   4   5   6   7   8   9 

move 5 from 4 to 5
move 2 from 5 to 8
move 2 from 9 to 1
move 2 from 9 to 1
move 1 from 5 to 3
move 10 from 5 to 8
move 1 from 4 to 7
move 1 from 1 to 2
move 5 from 3 to 7
move 1 from 2 to 8
move 21 from 8 to 5
move 13 from 5 to 7
move 2 from 9 to 4
move 1 from 7 to 4
move 5 from 1 to 4
move 1 from 5 to 7
move 2 from 2 to 7
move 1 from 3 to 2
move 1 from 1 to 6
move 7 from 5 to 9
move 16 from 7 to 4
move 7 from 9 to 3
move 1 from 7 to 5
move 1 from 3 to 8
move 3 from 2 to 7
move 1 from 8 to 9
move 3 from 3 to 6
move 21 from 4 to 9
move 1 from 5 to 7
move 4 from 4 to 9
move 8 from 6 to 3
move 6 from 7 to 1
move 12 from 9 to 8
move 6 from 7 to 2
move 3 from 6 to 5
move 1 from 6 to 9
move 4 from 8 to 6
move 3 from 8 to 5
move 4 from 1 to 8
move 4 from 6 to 1
move 2 from 1 to 3
move 1 from 5 to 8
move 2 from 2 to 8
move 5 from 8 to 3
move 4 from 2 to 7
move 5 from 8 to 1
move 2 from 1 to 7
move 1 from 8 to 2
move 2 from 1 to 7
move 11 from 9 to 2
move 1 from 8 to 5
move 2 from 9 to 4
move 3 from 9 to 5
move 2 from 5 to 1
move 6 from 5 to 8
move 2 from 4 to 2
move 1 from 5 to 6
move 7 from 1 to 8
move 2 from 2 to 7
move 13 from 8 to 1
move 16 from 3 to 1
move 3 from 2 to 1
move 12 from 7 to 6
move 15 from 1 to 8
move 2 from 3 to 8
move 16 from 1 to 2
move 24 from 2 to 8
move 1 from 1 to 5
move 1 from 5 to 8
move 3 from 6 to 7
move 26 from 8 to 3
move 20 from 3 to 9
move 1 from 2 to 9
move 16 from 9 to 3
move 14 from 3 to 1
move 13 from 1 to 6
move 3 from 3 to 4
move 3 from 9 to 4
move 1 from 7 to 8
move 5 from 8 to 2
move 8 from 8 to 5
move 18 from 6 to 1
move 4 from 8 to 5
move 6 from 4 to 1
move 2 from 2 to 5
move 5 from 3 to 8
move 5 from 8 to 7
move 2 from 5 to 8
move 5 from 5 to 4
move 3 from 2 to 8
move 22 from 1 to 2
move 1 from 1 to 2
move 5 from 8 to 2
move 2 from 5 to 2
move 1 from 1 to 6
move 5 from 5 to 2
move 1 from 9 to 8
move 5 from 4 to 1
move 6 from 6 to 9
move 3 from 1 to 9
move 1 from 1 to 7
move 8 from 9 to 6
move 6 from 7 to 1
move 5 from 6 to 5
move 27 from 2 to 1
move 4 from 5 to 7
move 9 from 1 to 5
move 1 from 9 to 1
move 3 from 6 to 2
move 9 from 2 to 1
move 2 from 7 to 2
move 1 from 8 to 7
move 10 from 5 to 9
move 1 from 9 to 7
move 25 from 1 to 8
move 6 from 7 to 4
move 11 from 1 to 7
move 3 from 8 to 1
move 3 from 2 to 6
move 3 from 8 to 9
move 11 from 8 to 6
move 1 from 2 to 6
move 12 from 6 to 4
move 13 from 4 to 5
move 1 from 6 to 1
move 3 from 7 to 5
move 5 from 8 to 7
move 1 from 7 to 1
move 5 from 1 to 6
move 3 from 6 to 4
move 3 from 8 to 6
move 2 from 5 to 2
move 12 from 5 to 9
move 5 from 6 to 2
move 2 from 5 to 9
move 6 from 4 to 9
move 11 from 7 to 3
move 1 from 2 to 5
move 1 from 7 to 8
move 1 from 5 to 7
move 1 from 7 to 1
move 1 from 8 to 1
move 2 from 4 to 7
move 2 from 6 to 8
move 5 from 3 to 6
move 2 from 7 to 2
move 2 from 2 to 9
move 1 from 2 to 9
move 1 from 1 to 6
move 35 from 9 to 7
move 2 from 8 to 7
move 3 from 3 to 8
move 5 from 2 to 4
move 3 from 3 to 7
move 2 from 4 to 7
move 4 from 6 to 5
move 4 from 5 to 9
move 3 from 4 to 5
move 1 from 8 to 3
move 4 from 9 to 8
move 1 from 9 to 6
move 38 from 7 to 2
move 1 from 3 to 5
move 1 from 1 to 7
move 4 from 7 to 3
move 3 from 6 to 1
move 22 from 2 to 7
move 1 from 5 to 8
move 7 from 8 to 4
move 8 from 2 to 8
move 3 from 5 to 1
move 4 from 3 to 9
move 1 from 8 to 3
move 1 from 3 to 7
move 2 from 2 to 3
move 5 from 8 to 9
move 3 from 9 to 1
move 2 from 1 to 7
move 6 from 2 to 3
move 6 from 3 to 1
move 2 from 3 to 6
move 1 from 6 to 1
move 14 from 7 to 2
move 4 from 1 to 6
move 8 from 1 to 3
move 4 from 3 to 6
move 3 from 9 to 5
move 1 from 8 to 6
move 1 from 8 to 4
move 9 from 7 to 1
move 8 from 2 to 4
move 4 from 2 to 9
move 2 from 2 to 1
move 3 from 5 to 8
move 1 from 8 to 6
move 1 from 7 to 8
move 1 from 6 to 5
move 3 from 9 to 5
move 2 from 9 to 5
move 4 from 3 to 9
move 3 from 6 to 3
move 3 from 6 to 9
move 9 from 4 to 1
move 1 from 9 to 8
move 3 from 3 to 6
move 2 from 7 to 4
move 4 from 8 to 5
move 7 from 5 to 6
move 19 from 1 to 9
move 5 from 9 to 3
move 2 from 1 to 6
move 1 from 4 to 6
move 4 from 3 to 2
move 21 from 9 to 7
move 1 from 1 to 2
move 1 from 9 to 1
move 1 from 1 to 8
move 16 from 7 to 6
move 24 from 6 to 5
move 7 from 4 to 5
move 1 from 8 to 3
move 2 from 2 to 8
move 31 from 5 to 8
move 1 from 4 to 6
move 2 from 6 to 9
move 1 from 7 to 4
move 3 from 7 to 9
move 1 from 4 to 8
move 2 from 3 to 5
move 1 from 2 to 3
move 1 from 3 to 7
move 1 from 7 to 9
move 24 from 8 to 6
move 1 from 8 to 1
move 30 from 6 to 1
move 2 from 5 to 2
move 1 from 6 to 9
move 6 from 9 to 7
move 1 from 6 to 4
move 1 from 4 to 6
move 23 from 1 to 3
move 21 from 3 to 4
move 4 from 2 to 6
move 3 from 6 to 1
move 1 from 5 to 1
move 4 from 1 to 9
move 3 from 9 to 6
move 8 from 1 to 6
move 4 from 8 to 5
move 2 from 7 to 5
move 7 from 4 to 3
move 3 from 4 to 9
move 9 from 3 to 9
move 1 from 7 to 6
move 6 from 5 to 8
move 14 from 6 to 2
move 4 from 8 to 4
move 7 from 4 to 5
move 1 from 7 to 9
move 6 from 4 to 3
move 13 from 2 to 6
move 5 from 3 to 7
move 1 from 3 to 8
move 1 from 8 to 2
move 4 from 8 to 3
move 6 from 6 to 4
move 2 from 2 to 8
move 5 from 4 to 7
move 3 from 7 to 5
move 1 from 7 to 9
move 2 from 3 to 9
move 3 from 7 to 3
move 1 from 7 to 9
move 1 from 7 to 9
move 3 from 4 to 1
move 6 from 6 to 1
move 2 from 7 to 5
move 1 from 3 to 5
move 11 from 9 to 4
move 9 from 4 to 5
move 3 from 3 to 4
move 1 from 3 to 9
move 2 from 8 to 1
move 9 from 1 to 8
move 22 from 5 to 8
move 2 from 1 to 3
move 3 from 4 to 6
move 14 from 8 to 9
move 1 from 3 to 9
move 19 from 9 to 3
move 3 from 9 to 4
move 2 from 7 to 2
move 1 from 4 to 6
move 1 from 3 to 8
move 8 from 3 to 1
move 2 from 9 to 6
move 1 from 2 to 5
move 3 from 4 to 9
move 1 from 2 to 3
move 20 from 8 to 3
move 4 from 9 to 5
move 1 from 4 to 2
move 26 from 3 to 5
move 1 from 8 to 3
move 8 from 1 to 4
move 1 from 3 to 7
move 1 from 2 to 1
move 1 from 1 to 6
move 1 from 6 to 7
move 4 from 5 to 3
move 3 from 4 to 2
move 5 from 5 to 3
move 2 from 2 to 6
move 3 from 3 to 5
move 2 from 4 to 8
move 5 from 3 to 9
move 5 from 9 to 8
move 19 from 5 to 9
move 1 from 5 to 2
move 2 from 7 to 1
move 1 from 1 to 7
move 1 from 7 to 4
move 13 from 9 to 3
move 8 from 6 to 2
move 10 from 3 to 5
move 14 from 5 to 4
move 7 from 8 to 4
move 1 from 6 to 2
move 6 from 3 to 8
move 4 from 9 to 7
move 2 from 9 to 8
move 1 from 7 to 1
move 3 from 2 to 7
move 1 from 5 to 3
move 7 from 8 to 6
move 5 from 6 to 2
move 8 from 4 to 5
move 3 from 5 to 8
move 3 from 8 to 6
move 5 from 7 to 9
move 5 from 3 to 6
move 1 from 9 to 4
move 17 from 4 to 7
move 1 from 8 to 1
move 12 from 7 to 8
move 3 from 1 to 4
move 2 from 4 to 6
move 8 from 6 to 1
move 4 from 6 to 3
move 1 from 7 to 8
move 5 from 5 to 8
move 4 from 7 to 1
move 3 from 2 to 6
move 2 from 5 to 1
move 6 from 1 to 6
move 4 from 3 to 5
move 4 from 5 to 3
move 1 from 4 to 8
move 3 from 3 to 2
move 17 from 8 to 4
move 6 from 6 to 3
move 14 from 4 to 9
move 1 from 3 to 8
move 1 from 7 to 4
move 3 from 8 to 3
move 5 from 2 to 5
move 6 from 1 to 7
move 2 from 6 to 4
move 4 from 5 to 7
move 1 from 1 to 5
move 1 from 6 to 3
move 10 from 7 to 4
move 1 from 5 to 4
move 1 from 2 to 3
move 15 from 4 to 5
move 3 from 3 to 1
move 6 from 2 to 6
move 1 from 2 to 3
move 2 from 4 to 7
move 2 from 7 to 8
move 1 from 4 to 2
move 2 from 1 to 7
move 1 from 7 to 2
move 12 from 9 to 1
move 4 from 9 to 5
move 4 from 6 to 2
move 1 from 7 to 3
move 6 from 2 to 4
move 1 from 8 to 5
move 2 from 4 to 2
move 11 from 1 to 7
move 3 from 1 to 4
move 17 from 5 to 6
move 15 from 6 to 4
move 1 from 8 to 9
move 10 from 4 to 1
move 1 from 3 to 9
move 2 from 6 to 5
move 1 from 2 to 6
move 4 from 5 to 6
move 4 from 1 to 2
move 6 from 6 to 7
move 2 from 2 to 6
move 9 from 4 to 9
move 6 from 1 to 2
move 3 from 4 to 1
move 10 from 9 to 8
move 4 from 2 to 1
move 1 from 1 to 2
move 5 from 8 to 6
move 1 from 2 to 7
move 1 from 9 to 4
move 2 from 6 to 9
move 13 from 7 to 2
move 5 from 7 to 5
move 2 from 5 to 2
move 1 from 4 to 5
move 4 from 8 to 4
move 17 from 2 to 6
move 3 from 4 to 6
move 2 from 9 to 1
move 7 from 6 to 8
move 1 from 5 to 2
move 1 from 4 to 1
move 2 from 9 to 4
move 1 from 3 to 9
move 4 from 3 to 7
move 2 from 8 to 5
move 3 from 7 to 5
move 10 from 5 to 8
move 2 from 2 to 4
move 6 from 1 to 2
move 4 from 6 to 3
move 8 from 2 to 6
move 1 from 7 to 4
move 5 from 4 to 5
move 7 from 6 to 7
move 5 from 3 to 5
move 5 from 5 to 2
move 4 from 8 to 1
move 6 from 1 to 6
move 3 from 3 to 2
move 22 from 6 to 2
move 1 from 9 to 7
move 8 from 8 to 6
move 1 from 7 to 6
move 2 from 5 to 7
move 4 from 8 to 5
move 7 from 6 to 7
move 2 from 6 to 4
move 14 from 2 to 1
move 7 from 1 to 3
move 12 from 7 to 3
move 1 from 4 to 3
move 2 from 5 to 8
move 2 from 8 to 1
move 1 from 4 to 3
move 6 from 2 to 9
move 6 from 9 to 2
move 2 from 2 to 7
move 6 from 7 to 5
move 13 from 3 to 5
move 5 from 2 to 6
move 5 from 6 to 1
move 2 from 3 to 6
move 1 from 6 to 5
move 1 from 6 to 1
move 3 from 1 to 9
move 6 from 2 to 7
move 1 from 2 to 3
move 24 from 5 to 2
move 7 from 3 to 7
move 13 from 7 to 9
move 4 from 1 to 9
move 4 from 1 to 6
move 1 from 5 to 6
move 16 from 9 to 5
move 1 from 6 to 4
move 1 from 5 to 2
move 5 from 1 to 3
move 11 from 2 to 1
move 4 from 9 to 6
move 1 from 4 to 7
move 2 from 3 to 4
move 6 from 6 to 9
move 1 from 1 to 3
move 2 from 9 to 4
move 1 from 7 to 9
move 4 from 2 to 9
move 8 from 9 to 2
move 3 from 3 to 2
move 1 from 9 to 4
move 5 from 1 to 7
move 1 from 4 to 8
move 2 from 1 to 9
move 1 from 8 to 7
move 6 from 5 to 3
move 1 from 5 to 1
move 5 from 2 to 3
move 4 from 1 to 5
move 4 from 7 to 1
move 8 from 5 to 8`;

function main() {
    const [rawCrates, rawInstructions] = input.split('\n\n');
    const crateStack = buildCrateStack(rawCrates);
    const instructions = rawInstructions.split('\n').map((r) => parseInstruction(r));
    instructions.forEach((i) => runInstruction(crateStack, i));
    const result = crateStack.map((s) => s.at(-1)).join('');
    console.log(result);
}

/**
 * 
 * @param {string} rawCrates
 * @returns {string[][]}
 */
function buildCrateStack(rawCrates) {
    const amount = parseInt(rawCrates.slice(-2, -1));
    const rawStacks = [];
    for (let _ = 0; _ < amount; _++) {
        rawStacks.push([]);
    }
    const crates = rawCrates.split('\n');
    crates.pop();
    crates.forEach((c) => {
        for (let i = 0; i * 4 < c.length; i++) {
            rawStacks[i].unshift(c[i * 4 + 1]);
        }
    });
    const stacks = rawStacks.map((s) => s.filter((c) => c !== ' '));
    return stacks;
}

/**
 * 
 * @param {`move ${number} from ${number} to ${number}`} instruction 
 */
function parseInstruction(instruction) {
    return [
        parseInt(instruction.slice(5, -12)),
        parseInt(instruction.slice(-6, -5)) - 1,
        parseInt(instruction.slice(-1)) - 1,
    ];
}

/**
 * 
 * @param {string[][]} crateStack 
 * @param {[number, number, number]} instruction
 */
function runInstruction(crateStack, instruction) {
    const [amount, from, to] = instruction;
    move(amount, pick(crateStack, [from, to]));
}

/**
 * 
 * @param {string[][]} crateStack 
 * @param {[number, number]} indexes
 * @returns {[string[], string[]]}
 */
function pick(crateStack, indexes) {
    return indexes.map((i) => crateStack[i]);
}

/**
 * 
 * @param {number} amount 
 * @param {[string[], string[]]} stacks 
 */
function move(amount, stacks) {
    const [from, to] = stacks;
    const moved = from.splice(-amount);
    to.push(...moved.reverse());
}

console.time('');
main();
console.timeEnd('');