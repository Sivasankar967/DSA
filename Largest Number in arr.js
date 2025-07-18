let arr = [2, 5, 8, 9, 11]

let isLargest = arr[0]
function LargestNum(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > isLargest) {
            isLargest = arr[i]
        }
    }
    return isLargest
}
let Result = LargestNum(arr)

console.log(Result)