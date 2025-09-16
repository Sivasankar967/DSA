let arr = [7, 4, 3, 5, 1, 2];

let n = arr.length;

function insertionSort(arr) {
    for (let i = 1; i < n; i++) {
        let curr = arr[i]
        let pre = i - 1;
        while (arr[pre] > curr && curr >= 0) {
            arr[pre + 1] = arr[pre];
            pre--;
        }
        arr[pre + 1] = curr
    }
    return arr;
}
let result = insertionSort(arr);
console.log(result)


