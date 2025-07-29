let arr = [10]
let even = ""
function findEvenNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] % 2 === 0 ? 'even' : 'odd');
    }
}

findEvenNumber(arr)
