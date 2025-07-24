let num = 259
function countDigit(num) {
    // Handling when num 0 need to return 1
    if (num === 0) return 1;
    // Convert Negative numbers to Postive
    num = Math.abs(num)
    let count = 0;
    while (num > 0) {

        num = Math.floor(num / 10)
        count = count + 1
    }
    return count;
}

let result = countDigit(num);
console.log(result)

