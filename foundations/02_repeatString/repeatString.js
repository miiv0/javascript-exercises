const repeatString = function (word, num) {
    if (num < 0)
        return "ERROR";
    let sentence = "";
    for (let i = 0; i < num; i++) {
        sentence += word
    }
    return sentence
};

// Do not edit below this line
module.exports = repeatString;
