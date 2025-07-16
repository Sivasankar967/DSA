
let arr = [10, 8, 5, 3, 1, 9]

function SearchElement(arr, find) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === find) {
            return i
        }
    }
    return -1
}
let Result = SearchElement(arr, 9)
console.log(Result)
