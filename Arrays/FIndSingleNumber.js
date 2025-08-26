// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// using the bitwise XOR operator.
let arr = [4, 1, 2, 1, 2];
let x = 0;
function findSingleNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        x = x ^ arr[i]
    }
    return x
}

let Result = findSingleNumber(arr);
console.log(Result)


