// 0, 1, 1, 2, 3, 5, 8, 13 ...
// 15 => 610

const n: number = 15
let a: number = 0
let b: number = 1

for (let i = 1; i < n; i++) {
    let nextNumber = a + b
    a = b
    b = nextNumber
}

console.log(b)
