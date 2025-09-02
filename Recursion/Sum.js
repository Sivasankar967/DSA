let x = 0
function Sum(num) {
    if (num == x) return x
    return num + Sum(num - 1)
}
console.log(Sum(5))
