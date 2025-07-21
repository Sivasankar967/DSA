let arr = [2]

let FirstLargest = -Infinity;

let SecondLargest = -Infinity;
function FindSecondLargest(arr) {
    // #Corner cases
    // if suppose Array have only one number in Array need to print null
    if(arr.length<2){
        return null
    }
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