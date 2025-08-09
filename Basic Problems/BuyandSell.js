let arr = [7, 1, 5, 3, 6, 4];

let min = arr[0]
let maxProfit = 0;

function buyandSell() {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - min > maxProfit)
            maxProfit = arr[i] - min;

        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return maxProfit
}
let result = buyandSell();
console.log(result)