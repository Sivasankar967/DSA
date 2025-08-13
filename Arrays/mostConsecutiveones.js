let arr = [1, 1, 0, 1, 1, 1];

let x = 0;

function mostConsecutiveones(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= x) {
            x = i

        }
    }
    return x
}
let result = mostConsecutiveones(arr);
console.log(result)

