//Timecomplexity: O(n) SpaceComplexity: O(n)
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

let arr = [2, 2, 1];
let hash = {}
function SingleNumberFind(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            hash[arr[i]] = 1
        }
        else {
            hash[arr[i]]++
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]] == 1) {
            return arr[i]
        }
    }

}
let result = SingleNumberFind(arr);
console.log(result)