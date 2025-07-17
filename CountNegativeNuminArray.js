let arr = [8, 4, , -3, 7, -5, 1, -9, 2]
let count = 0
function CountNegativenum(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count = count + 1
        }
    }
    return count
}
let Result = CountNegativenum(arr)
console.log(Result)