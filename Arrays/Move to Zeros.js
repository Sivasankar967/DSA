let arr = [0, 1, 0, 3, 12];

let x = 0;
function movetozero(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[x] = arr[i]
            x++;
        }

    }
    for (i = x; i < arr.length; i++) {
        arr[i] = 0
    }
    return arr
}

let result = movetozero(arr);
console.log(result)