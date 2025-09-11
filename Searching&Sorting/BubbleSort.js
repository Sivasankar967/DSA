let arr = [5, 4, 9, 7, 1, 0];
let n = arr.length;
function bubblesort(arr) {
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
let result = bubblesort(arr);
console.log(result)