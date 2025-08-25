let nums = [4, 0, 2, 1, 5];
let n = nums.length;
let Totalsum = n * (n + 1) / 2;
let Partialsum = 0;
function findMissingNumber(nums) {
    for (let i = 0; i < n; i++) {
        Partialsum = Partialsum + nums[i]
    }
    return Totalsum - Partialsum
}

let result = findMissingNumber(nums);
console.log(result)