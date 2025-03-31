const sumAll = function (start, end) {
    if (start > end) {
        const swap = start;
        start = end;
        end = swap;
    }
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
