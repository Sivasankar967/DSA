let n = 8

function powerofTwo(n) {
    if (n == 1) {
        return true
    }
    else if (n < 1 || (n % 2 !== 0))

        return false

    return powerofTwo(n / 2)
}

console.log(powerofTwo(n))