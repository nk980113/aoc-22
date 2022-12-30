const input = `Monkey 0:
Starting items: 98, 97, 98, 55, 56, 72
Operation: new = old * 13
Test: divisible by 11
  If true: throw to monkey 4
  If false: throw to monkey 7

Monkey 1:
Starting items: 73, 99, 55, 54, 88, 50, 55
Operation: new = old + 4
Test: divisible by 17
  If true: throw to monkey 2
  If false: throw to monkey 6

Monkey 2:
Starting items: 67, 98
Operation: new = old * 11
Test: divisible by 5
  If true: throw to monkey 6
  If false: throw to monkey 5

Monkey 3:
Starting items: 82, 91, 92, 53, 99
Operation: new = old + 8
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 2

Monkey 4:
Starting items: 52, 62, 94, 96, 52, 87, 53, 60
Operation: new = old * old
Test: divisible by 19
  If true: throw to monkey 3
  If false: throw to monkey 1

Monkey 5:
Starting items: 94, 80, 84, 79
Operation: new = old + 5
Test: divisible by 2
  If true: throw to monkey 7
  If false: throw to monkey 0

Monkey 6:
Starting items: 89
Operation: new = old + 1
Test: divisible by 3
  If true: throw to monkey 0
  If false: throw to monkey 5

Monkey 7:
Starting items: 70, 59, 63
Operation: new = old + 3
Test: divisible by 7
  If true: throw to monkey 4
  If false: throw to monkey 3`;

function main() {
    const monkeys = parseInput(input);
    const inspectCount = Array(monkeys.length).fill(0);
    for (let i = 0; i < 10000; i++) {
        monkeys.forEach((monkey, i) => {
            monkey.items.forEach((item) => {
                inspectCount[i] += 1;
                const newLv = monkey.op(item);
                if (newLv[monkey.test] === 0) {
                    monkeys[monkey.throws[0]].items.push(newLv);
                } else {
                    monkeys[monkey.throws[1]].items.push(newLv);
                }
            });
            monkey.items = [];
        });
    }
    const topTwo = inspectCount.sort((a, b) => b - a).slice(0, 2);
    console.log(topTwo[0] * topTwo[1]);
}

/**
 * 
 * @param {string} input 
 */
function parseInput(input) {
    const rawMonkeys = input.split('\n\n');
    const monkeys = rawMonkeys.map((m) => m.split('\n').map((l) => l.trim())).map((lines) => {
        return {
            items: lines[1].slice(16).split(', ').map((i) => parseInt(i)),
            rawOp: new Function('old', `return ${lines[2].slice(17)}`),
            test: parseInt(lines[3].slice(19)),
            throws: [parseInt(lines[4].slice(25)), parseInt(lines[5].slice(26))],
        };
    }).map((m, _, monkeys) => {
        return {
            ...m,
            items: m.items.map((i) => {
                const returnVal = {};
                for (const dv of new Set(monkeys.map(m => m.test))) {
                    returnVal[dv] = i % dv;
                }
                return returnVal;
            }),
            op(i) {
                const returnVal = {};
                for (const rawDv in i) {
                    const dv = parseInt(rawDv);
                    returnVal[dv] = this.rawOp(i[dv]) % dv;
                }
                return returnVal;
            },
        }
    });
    return monkeys;
}

console.time('');
main();
console.timeEnd('');