let arr = [5, 3, 2, 0, 1];

function sumofArrayElements(n) {
    if (n == 0) return arr[0];

    return arr[n] + sumofArrayElements(n - 1)
}

console.log(sumofArrayElements(arr.length - 1))  