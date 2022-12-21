const input = `addx 1
addx 4
addx 21
addx -20
addx 4
noop
noop
addx 5
addx 3
noop
addx 2
addx 1
noop
noop
addx 4
noop
noop
noop
addx 3
addx 5
addx 2
addx 1
noop
addx -37
addx 22
addx -4
addx -14
addx 2
addx 5
addx 3
addx -2
addx 2
addx 5
addx 2
addx -15
addx 32
addx -14
addx 5
addx 2
addx 3
noop
addx -13
addx -2
addx 18
addx -36
noop
addx 11
addx -7
noop
noop
addx 6
addx 22
addx -21
addx 3
addx 2
addx 4
noop
noop
noop
addx 5
addx -16
addx 17
addx 2
addx 5
addx -11
addx 15
addx -15
addx -24
noop
noop
addx 7
addx 2
addx -6
addx 9
noop
addx 5
noop
addx -3
addx 4
addx 2
noop
noop
addx 7
noop
noop
noop
addx 5
addx -28
addx 29
noop
addx 3
addx -7
addx -29
noop
addx 7
addx -2
addx 2
addx 5
addx 2
addx -3
addx 4
addx 5
addx 2
addx 8
addx -30
addx 25
addx 7
noop
noop
addx 3
addx -2
addx 2
addx -10
addx -24
addx 2
noop
noop
addx 2
noop
addx 3
addx 2
noop
addx 3
addx 2
addx 5
addx 2
noop
addx 1
noop
addx 2
addx 8
noop
noop
addx -1
addx -9
addx 14
noop
addx 1
noop
noop`;

function main() {
    const cpu = {
        x: 1,
        instructions: input.split('\n'),
        *cycles() {
            yield { i: 1, x: 1 };
            let i = 1;
            for (const instruction of this.instructions) {
                i++;
                if (instruction === 'noop') yield { i, x: this.x };
                else {
                    yield { i, x: this.x };
                    i++;
                    this.x += parseInt(instruction.slice(5));
                    yield { i, x: this.x };
                }
            }
        },
    };
    let totalStrength = 0;
    for (const { i, x } of cpu.cycles()) {
        if (isImportantCycle(i)) {
            totalStrength += i * x;
        }
    }
    console.log(totalStrength);
}

function isImportantCycle(cycle) {
    return cycle % 40 === 20;
}

console.time('');
main();
console.timeEnd('');