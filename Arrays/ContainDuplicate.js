let arr = [1, 2, 3, 4];
let x = 0;
function containsDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true;
            }
        }
    }
    return false;
}

let result = containsDuplicate(arr);
console.log(result)