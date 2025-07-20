let arr = [2, 5, 8, 9, 1, 0]

let FirstLargest = -Infinity;

let SecondLargest = -Infinity;
function FindSecondLargest(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > FirstLargest) {
            SecondLargest = FirstLargest
            FirstLargest = arr[i]
        }
        else if (arr[i] > SecondLargest) {
            SecondLargest = arr[i]
        }
    }
    return FirstLargest;
}

let result = FindSecondLargest(arr)
console.log(result);