let n = 5

var fib = function (n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2)
};
console.log(fib(n))