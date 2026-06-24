const factorial = function factorial(n) {
    if (n <= 0) {
        console.log("Done")
        return
    }
    console.log(n)
    const n = n * n
    console.log(n)
    factorial(n)
};

console.log(factorial(3))


// Do not edit below this line
module.exports = factorial;