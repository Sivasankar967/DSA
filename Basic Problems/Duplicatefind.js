let arr = [1, 3, 5, 7, 9, 8, 7]
let count = {}
let Duplicate = []
for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
        Duplicate.push(arr[i])
    } else {
        count[arr[i]] = 1
    }
}
console.log(Duplicate)


