let arr = [5, 2, 3, 0, 1];

function sum(n) {
    let isodd = arr[n] % 2 != 0
    if (n == 0) {
        return isodd ? arr[n] : 0
    }

    return ((isodd ? arr[n] : 0) + sum(n - 1))
}
console.log(sum(arr.length - 1))


