function UnderstandRecursion(num) {
    if (num == 0) return;
    num = num - 1;
    UnderstandRecursion(num);
    console.log(num);
}

let a = 10;
UnderstandRecursion(a);
