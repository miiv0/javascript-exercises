const leapYears = function (year) {
    divYear = year / 4;
    testYear = Math.round(divYear);
    console.log(testYear);
    if (testYear === divYear) {
        return true
    }
    else
        return false
};

// Do not edit below this line
module.exports = leapYears;
