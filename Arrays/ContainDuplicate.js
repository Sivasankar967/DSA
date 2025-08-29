// Timecomplexity: O(n)
// Spacecomplexity: O(n)

let arr = [1, 2, 3, 1];
let hash = {};
function DuplicateContain(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]] === true) {
            return true
        }
        hash[arr[i]] = true
    }
    return false
}

let result = DuplicateContain(arr);
console.log(result)