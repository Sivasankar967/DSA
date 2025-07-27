function ReverseInteger(x) {
    let xCopy = x
    let rev = "";
    x = Math.abs(x)
    while (x > 0) {
        let rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10)
    }
    return (xCopy < 0) ? -rev : rev
    return rev
}
let result = ReverseInteger(123);
console.log(result)