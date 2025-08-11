let arr = [2, 6, 9, 0, 9, 7, -1]

let isSmallest = arr[0];
function FindSmallestnumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < isSmallest) {
            isSmallest = arr[i];
        }
    }
    return isSmallest;
}
let Result = FindSmallestnumber(arr)

console.log(Result)