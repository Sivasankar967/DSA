let arr = [4, 9, 1, 0, 2];

function Linearsearch(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1 // if target element not present in the array
}

let result = Linearsearch(arr, 0);
console.log(result)