var isPalindrome = function (x) {
    if (x < 0) return false
    let Xcopy = x
    let rev = 0;
    while (x > 0) {
        let rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10)
    }
    if (rev === Xcopy) {
        return true;
    }
    else {
        return false;
    }
};
let Result = isPalindrome(121)
console.log(Result)