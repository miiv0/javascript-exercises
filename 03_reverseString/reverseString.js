const reverseString = function (word) {
    let reverse = "";
    word = word.split('');
    let times = word.length;
    for (let i = 0; i < times; i++) {
        reverse += word.splice(-1)
    }
    return reverse;

};

// Do not edit below this line
module.exports = reverseString;
