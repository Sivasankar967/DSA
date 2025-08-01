let arr = [2, 4, 6, 7, 1, 5, 10, 50];
let largest = 0;
function findLargest(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest

}
let result = findLargest(arr);
console.log(result)