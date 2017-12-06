let banks = [14, 0, 15, 12, 11, 11, 3, 5, 1, 6, 8, 4, 9, 1, 8, 4];

const indexOfHighestBlock = (array) => array.indexOf(Math.max(...array));

const numberOfCycles = (banks) => {
    let history = {};

    while(!history[banks]) {
        history[banks] = true;

        let index = indexOfHighestBlock(banks);
        let numberOfBlockToSpread = banks[index];
        banks[index] = 0;

        while(numberOfBlockToSpread-- > 0) {
            banks[++index % banks.length] += 1;
        }
    }

    return Object.keys(history).length;
};

console.log("Part1 :" + numberOfCycles(banks));
console.log("Part2 :" + numberOfCycles(banks));
