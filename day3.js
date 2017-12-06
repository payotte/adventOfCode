const input = 325489;

const pointOf = (square) => {
    const isCorner = (x, y) => x === y || (x < 0 && x === -y) || (x > 0 && x === 1 - y);
    const turn = (dx, dy) => [-dy, dx];
    const move = (x, y, dx, dy) => [x + dx, y + dy];

    let x = 0, y = 0;
    let dx = 0, dy = -1;
    let currentSquare = 1;

    while(currentSquare++ !== square)
    {
        if (isCorner(x, y))
            [dx, dy] = turn(dx, dy);

        [x, y] = move(x, y, dx, dy);
    }

    return [x, y];
};

const sumOfNeighborsOf = (point, grid) => {
    const offset = (point, offsetx, offsety) => [point[0] + offsetx, point[1] + offsety];
    const valueOf = (position, grid) => grid[position] || 0;

    return valueOf(offset(point, 0, 1), grid) +
        valueOf(offset(point, 1, 1), grid) +
        valueOf(offset(point, 1, 0), grid) +
        valueOf(offset(point, 1, -1), grid) +
        valueOf(offset(point, 0, -1), grid) +
        valueOf(offset(point, -1, -1), grid) +
        valueOf(offset(point, -1, 0), grid) +
        valueOf(offset(point, -1, 1), grid);
};


const distanceFromAccessPort = (number) => pointOf(number).reduce((distance, unit) => distance + Math.abs(unit), 0);

const firstValueLargerThan = (number) => {
    const grid = {};
    let currentSquare = 1;

    while(true)
    {
        const point = pointOf(currentSquare);

        if (currentSquare === 1)
            grid[point] = 1;
        else
            grid[point] = sumOfNeighborsOf(point, grid);

        if (grid[point] > number)
            return grid[point];

        currentSquare++;
    }
};

console.log("Answer part 1: " + distanceFromAccessPort(input));
console.log("Answer part 2: " + firstValueLargerThan(input));