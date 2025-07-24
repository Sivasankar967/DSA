n = 6;
let flip = 1
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
        row = row + flip
        if (flip === 1) {
            flip = 0
        } else {
            flip = 1
        }
    }
    console.log(row)
}

// 1
// 01
// 010
// 1010
// 10101
// 010101
