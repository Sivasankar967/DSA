let arr = [1, 1, 0, 1, 1, 1]
function findMaxConsecutiveOnes(arr) {
    let currentcount = 0;
    let maxcount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentcount++
        }
        else {
            maxcount = Math.max(currentcount, maxcount);
            currentcount = 0
        }
    }
    return maxcount = Math.max(currentcount, maxcount);
};

let result = findMaxConsecutiveOnes(arr);
console.log(result);